'''
    RESTful service for todoitem
'''
import base_resource
from flask_restful import Resource, fields, marshal_with
from todolist_service import TodoListService

#http://flask-restful.readthedocs.io/en/latest/fields.html
todoitem_resource_fields = {
    'id': fields.Integer,
    'title': fields.String,
    'comment': fields.String,
    'groupid': fields.String,
    'status': fields.String,
}

class TodoItemResource(Resource):
    '''
    RESTful API for todo items
    '''
    def __init__(self):
        self.list_app_service = TodoListService()

    @marshal_with(todoitem_resource_fields, envelope='todoitem')
    def get(self, groupid):
        todoitems = self.list_app_service.list_todoitem_by_group(groupid)
        return todoitems
