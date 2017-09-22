'''
    Refer to http://flask-httpauth.readthedocs.io/en/latest/
'''
from flask import Flask
from flask_httpauth import HTTPBasicAuth

app = Flask(__name__)
auth = HTTPBasicAuth()

users = {
    "John":"Hello",
    "Susan":"Bye"
}

@auth.get_password
def get_pwd(username):
    if username in users:
        return users.get(username)
    return None

@app.route('/')
@auth.login_required
def index():
    return "Hello, %s" % auth.username()

if __name__ == '__main__':
    app.run()