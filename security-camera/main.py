from flask import Flask, send_file
import cv2

app = Flask(__name__)

VIDEO_NAME = 'video2.mp4'
IMAGE_NAME = 'image.jpg'

vidcap = cv2.VideoCapture(VIDEO_NAME)
frame_count = 0
FRAMERATE = 30

@app.route("/")
def get_camera_data():
    global frame_count
    success, image = vidcap.read(60)
    if success:
        cv2.imwrite(IMAGE_NAME, image)
    vidcap.set(cv2.CAP_PROP_POS_FRAMES, frame_count)
    frame_count += FRAMERATE
    return send_file(IMAGE_NAME, mimetype='image/gif')
    
