'''
    base entity of SQLAlChemy
'''
import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy

repository_folder = os.path.abspath(os.path.dirname(__file__))
SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(repository_folder, 'mctkit.db.sqlite')

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
db = SQLAlchemy(app)
