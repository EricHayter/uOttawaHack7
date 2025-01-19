from groq_interact import call_groq
from flask import Flask, abort
from datetime import datetime
from markupsafe import escape
import requests
import base64
import json

app = Flask(__name__)
connected_users = []

#YES, the cat is engaging in inappropriate behavior by wearing a chef's hat and attempting to cut green onions with a knife on a wooden cutting board.
#prompt = "Write YES or NO with spaces between (there should be 6 in total), if the following is true about the image: the animal is not on the floor, the animal is eating food, the animal is excrementing or urinating, the animal is scratching an object, the animal is doing something else it should not be, the animal is demonstrating inappropriate behaviour"

def parse_text(prompt, image):
    words = prompt.split()
    if len(words) != 6:
        print("ERROR")
    data = {
        'inappropriate': words[5] == "YES",
        'miscellaneous': words[4] == "YES",
        'scratch': words[3] == "YES",
        'poo': words[2] == "YES",
        'eat': words[1] == "YES",
        'climb': words[0] == "YES",
        'image': image,
        'time': datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    }
    with open("data.json", "w") as json_file:
        json.dump(data, json_file, indent=4)


@app.route("/connect/<userid>/<device_addr>")
def connect_user(userid, device_addr):
    connected_users.append((userid,device_addr))
    return f'User {escape(userid)} connected'

@app.route("/disconnect/<userid>")
def disconnect_user(userid):
    global connected_users
    connected_users = [(user, device) for (user, device) in connected_users if user != userid]
    return f'User {escape(userid)} disconnected'

@app.route("/<userid>")
def get_user(userid):
    devices = [device for (user, device) in connected_users if user == userid]
    if not devices:
        return abort(404)
    for device in devices:
        base64_data = base64.b64encode(requests.get(f'http://{device}', stream=True).content).decode('utf-8') # for image
        # send base64_data in json
        # send sentence
        # timestamp (time during for logging)
        # is_of_interest (if it has "YES" then it will be of interest) this will be useful to 
        # let the twins know if they should include the poloroid of the picture on the website
        # or just show it as the latest live data and then toss once new stuff comes
        return parse_text(call_groq(base64_data), base64_data)
        #return call_groq(base64_data)
    

