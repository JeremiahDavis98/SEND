from flask import Flask

app = Flask(__name__, static_folder='./build', static_url_path='/')

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/HomePage')
def HomePage():
    return url_for('static', filename = 'HomePage.js')
    
if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))