from flask import Flask, request, render_template
from flask_socketio import SocketIO

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
socketio = SocketIO(app) 

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/admin')
def admin():
    return render_template('admin.html')

@app.route('/controller')
def controller():
    user = request.args.get('user') 
    return render_template('controller.html')

@socketio.on('message_from_controller')
def handle_message(message):
    print("Received message from controller:", message)
    socketio.emit('message_to_default', message)
    socketio.emit('custom_message_to_controller', 'Message received by the server!')

if __name__ == '__main__':
    app.run(debug=True)
    socketio.run(app)