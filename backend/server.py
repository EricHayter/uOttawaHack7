from groq_interact import call_groq
from flask import Flask, abort
from markupsafe import escape
import requests

app = Flask(__name__)
connected_users = []

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
        return call_groq(f'http://{device}')
