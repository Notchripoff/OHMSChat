"""Server.py"""
from flask import Flask, render_template
from flask_socketio import SocketIO

app =  Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

@socketio.on("on_connection")
def on_connection():
    print("Connected to client!")

@socketio.on("login_information")
def login(data):
    print(data)

@app.route("/api/v1/<id>")
def api_route(id: int):
    return render_template

socketio.run(app, debug=True, host="0.0.0.0", port=8000)
