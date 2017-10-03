'''
    Todo item repository
'''
#from flask_marshmallow import Marshmallow
from base_entity import db

class Todoitem(db.Model):
    '''
        maps to table todoitem
    '''
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(200))
    comment = db.Column(db.String(500))
    groupid = db.Column(db.Integer)
    status = db.Column(db.Integer)

    def __init__(self, title, comment, groupid, status):
        print('Initialized')
        self.comment = comment
        self.title = title
        self.groupid = groupid
        self.status = status
        self.id = -1

class TotoItemRepository:

    def query_all_todoitems(self):
        return Todoitem.query.all()

    def query_todoitems_by_groupid(self, groupid):
        return Todoitem.query.filter_by(groupid=groupid)

    def query_todoitems_tobedone_by_groupid(self, groupid):
        return Todoitem.query.filter_by(groupid=groupid).filter_by(status=0)
