'''
    base repository of SQLAlChemy
'''
import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

basedatadir = os.path.abspath(os.path.dirname(__file__))
SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(basedatadir, 'mctkit.db.sqlite')

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI#'sqlite:////mctkit.db.sqlite'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
db = SQLAlchemy(app)

class BaseEntity(db.Model):

    def __init__(self):
        pass

    def version(self):
        return '1.0'
