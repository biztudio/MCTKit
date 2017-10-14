'''
    Create flask app and some common things
'''
from flask import Flask, jsonify
from flask_httpauth import HTTPTokenAuth
import os  

token_expiration_seconds = 600

app = Flask(__name__)
#http://www.cnblogs.com/Erick-L/p/7060806.html
bearer_token_auth = HTTPTokenAuth(scheme='Bearer')

#http://blog.csdn.net/fo11ower/article/details/70062524
#app.config['JSON_AS_ASCII'] = False
app.config['SECRET_KEY'] = os.urandom(24) 
