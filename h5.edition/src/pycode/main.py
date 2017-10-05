from flask import render_template
from flaskapp import app
from flask_restful import Api
from config import DebugConfig
from flask_json import FlaskJSON

import os, sys
folder = os.path.abspath(os.path.dirname(__file__))
api_foler = folder + "\\api"
sys.path.append(api_foler)
print(api_foler)
from todoitem import TodoItemResource

app.config.from_object(DebugConfig)
api = Api(app)
FlaskJSON(app)

api.add_resource(TodoItemResource, '/todoitem/<groupid>')

@app.route('/')
def home():
    return '<h1>Hello, MCTKit</h1>'

@app.route('/tsimp')
def todo_simple():
    return app.send_static_file("todoitem_simp.html")#render_template('todoitem_simp.html')

if __name__ == '__main__':
    app.run()
