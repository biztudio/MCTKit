'''
    Todo list service
'''
from app_service import ApplicationBase
from todoitem_service import TodoItemService, TodoItem, TodoItem_Status_Enum

class TodoListService(ApplicationBase):
    def __init__(self):
        self.todoitemservice = TodoItemService()

    def list_todoitem_by_group(self, groupid):
        return self.todoitemservice.query_items_by_groupid(groupid)

if __name__ == '__main__':
    list_svr = TodoListService()
    [print(i.title,': ',i.status) for i in list_svr.list_todoitem_by_group(1)]

