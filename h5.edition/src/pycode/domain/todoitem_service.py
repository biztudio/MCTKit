'''
    Todoitem Domain Service
'''
from enum import Enum
from domain_service import DomainBase
from todorepository import TotoItemRepository, TodoitemEntity

class TodoItem_Status_Enum(Enum):
    ToBeDone = 0
    Done = 10
    Cancelled = -1

class TodoItem:
    def __init__(self, itemid, title, comment, groupid, status):
        self.comment = comment
        self.title = title
        self.groupid = groupid
        self.id = itemid
        if status is None:
            self.status = TodoItem_Status_Enum(0)
        else:
            self.status = TodoItem_Status_Enum(status)

class TodoItemService(DomainBase):
    def __init__(self):
        self.repository = TotoItemRepository()

    def query_items_by_groupid(self, groupid):
        '''
        List the todo items in provided groupid
        '''
        items_entity = self.repository.query_todoitems_by_groupid(groupid)
        return [TodoItem(i.id, i.title, i.comment, i.groupid, i.status) for i in items_entity]

    def add_todoitem(self, new_todoitem):
        '''
        Create a new todo item in database
        '''
        todoitem_entity = TodoitemEntity(new_todoitem['title'], new_todoitem['comment'], new_todoitem['groupid'], new_todoitem['status'])
        self.repository.add_new_todoitem(todoitem_entity)

if __name__ == '__main__':
    items = TodoItemService().query_items_by_groupid(1)
    [print(i.title,': ',i.status) for i in items]