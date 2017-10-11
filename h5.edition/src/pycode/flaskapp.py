'''
    Create flask app and some common things
'''
from flask import Flask, jsonify

app = Flask(__name__)
#http://blog.csdn.net/fo11ower/article/details/70062524
app.config['JSON_AS_ASCII'] = False
