import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

basedir = os.path.abspath(os.path.dirname(__file__))
SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedir, 'mctkit.db.sqlite')
print(SQLALCHEMY_DATABASE_URI)
app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI#'sqlite:////mctkit.db.sqlite'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
db = SQLAlchemy(app)


class Credential(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80))
    password = db.Column(db.String(120))
    token = db.Column(db.String(300))

    def __init__(self, username, password, token):
        self.username = username
        self.password = password
        self.token = token
        #self.id = cid

    def __repr__(self):
        print (self.id)
        return '<Credential %r>' % (self.username)


if __name__ == "__main__":
    credentials = Credential.query.all()
    print(credentials)
