'''
    base entity of SQLAlChemy
'''
import os
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flaskapp import app

repository_folder = os.path.abspath(os.path.dirname(__file__))
SQLALCHEMY_DATABASE_URI = 'sqlite:///' + os.path.join(repository_folder, 'mctkit.db.sqlite')
app.config['SQLALCHEMY_DATABASE_URI'] = SQLALCHEMY_DATABASE_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = True
# Order matters: Initialize SQLAlchemy before Marshmallow
db = SQLAlchemy(app)
mash = Marshmallow(app)

print('Repository is being consuming...')
