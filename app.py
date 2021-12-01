from flask import Flask

app = Flask(__name__, static_folder='./build', static_url_path='/')

@app.route('/')
def index():
    return "hi"

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))