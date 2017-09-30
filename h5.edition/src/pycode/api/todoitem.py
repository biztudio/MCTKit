'''
    RESTful service for todoitem
'''
import base_resource
from todolist_service import TodoListService
from flask_restful import Resource

class TodoItemResource(Resource):
    def __init__(self):
        self.list_app_service = TodoListService()

    def get(self, groupid):
        return self.list_app_service.list_todoitem_by_group(groupid)
