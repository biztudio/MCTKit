'''
    RESTful service for todoitem
'''
import base_resource
from flask_restful import Resource, fields, marshal_with, reqparse
from todolist_service import TodoListService

#http://flask-restful.readthedocs.io/en/latest/fields.html
todoitem_resource_fields = {
    'id': fields.Integer,
    'title': fields.String,
    'comment': fields.String,
    'groupid': fields.String,
    'status': fields.String,
}

class TodoItemQueryByGroupResource(Resource):
    '''
    RESTful API for todo items
    '''
    def __init__(self):
        self.list_app_service = TodoListService()

    @marshal_with(todoitem_resource_fields, envelope='todoitem')
    def get(self, groupid):
        todoitems = self.list_app_service.list_todoitem_by_group(groupid)
        return todoitems

class TodoItemDataResource(Resource):
    '''
    RESTful API for add/update todo items
    '''
    def __init__(self):
        #The whole request parser part of Flask-RESTful is slated for removal
        #To do the input/output stuff better (such as marshmallow)
        #https://flask-marshmallow.readthedocs.io/en/latest/
        self.arg_parser = reqparse.RequestParser()
        self.list_app_service = TodoListService()

    def post(self):
        self.arg_parser.add_argument('title')
        self.arg_parser.add_argument('comment')
        self.arg_parser.add_argument('groupid')
        self.arg_parser.add_argument('status')
        args = self.arg_parser.parse_args()
        new_todo_item = {'title':args['title'], 'comment':args['comment'], 'groupid':args['groupid'], 'status':args['status']}
        self.list_app_service.add_todoitem(new_todo_item)
        return {'NewTodoItem':new_todo_item['title']}, 201
