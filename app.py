from flask import Flask
from flask_jwt_extended import create_access_token
from pymongo import MongoClient
import os


app = Flask(__name__, static_folder='./build', static_url_path='/')

client = MongoClient('mongodb+srv://admin:X09gj2zDiuaH3st0@cluster0.1ldwc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')
database = client['data']

@app.route('/api/login')
def login():
    username = request.json.get('user', None)
    password = request.json.get('pass', None)

    users = database['users']
    login_user = users.find_one({'username' : username})

    if login_user:
        if bcrypt.hashpw(password.encode('utf-8'), login_user['password']) == login_user['password']:
            access_token = create_access_token(identity=user)
            return jsonify(access_token=access_token)



@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/HomePage')
def HomePage():
    return url_for('static', filename = 'HomePage.js')

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))
