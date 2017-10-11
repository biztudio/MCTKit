'''
    Entry of this app
'''
from flask import render_template
from flaskapp import app
from flask_restful import Api
from config import DebugConfig

import os, sys
app_folder = os.path.abspath(os.path.dirname(__file__))
api_foler = app_folder + "\\api"
#sys.path.append(app_folder)
sys.path.append(api_foler)
print(api_foler)
from todoitem import TodoItemQueryByGroupResource, TodoItemDataResource

app.config.from_object(DebugConfig)
api = Api(app)

api.add_resource(TodoItemQueryByGroupResource, '/todoitem/<groupid>')
api.add_resource(TodoItemDataResource, '/todoitem')

@app.route('/')
def home():
    return '<h1>Hello, MCTKit</h1>'

@app.route('/tsimp')
def todo_simple():
    #Flask's template may conflict with Vue template....
    return app.send_static_file("todoitem_simp.html")#render_template('todoitem_simp.html')

if __name__ == '__main__':
    app.run()
