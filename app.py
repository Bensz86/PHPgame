from flask import Flask, request, render_template
from flask_socketio import SocketIO
import json

app = Flask(__name__)
app.config['SECRET_KEY'] = 'secret!'
app.config['STATIC_FOLDER'] = 'static'
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
    print(f"User {user} connected")
    return render_template('controller.html')

@socketio.on('message_from_controller')
def handle_message(message):
    print("Received message from controller:", message)
    socketio.emit('message_to_default', message)
    socketio.emit('custom_message_to_controller', 'Message received by the server!')

@socketio.on('message_from_admin')
def handle_message(message):
    print("Received message from admin:", message)
    #socketio.emit('message_to_default', message)
    socketio.emit('custom_message_to_controller', message)

@socketio.on('ping')
def handle_message(message):
    print("User "+ str(request.args.get('user')) + " alive:", message)
    #socketio.emit('message_to_default', message)

def get_question_data(index, filename='static/data/config.json', delimiter='|'):
    try:
        with open(filename, 'r') as file:
            data = json.load(file)
            questions = data.get('questions')
            if questions and 0 <= index < len(questions):
                question = questions[index]['question']
                options = '|'.join(questions[index]['options'])
                correct_answer = questions[index]['correctAnswer']
                return f"{question}{delimiter}{options}{delimiter}{correct_answer}"
            else:
                return "Invalid index"
    except FileNotFoundError:
        return "File not found"
    except json.JSONDecodeError:
        return "Invalid JSON format"
    
# Example usage
index = 0  # Change this index to get data for a different question
question_data = get_question_data(index)
#print(question_data)

if __name__ == '__main__':
    app.run(debug=True)
    socketio.run(app)