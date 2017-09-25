'''
    Credential repository
'''
from base_entity import db, BaseEntity

class Credential(BaseEntity):
    __table__ = 'credential'
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(200))
    password = db.Column(db.String(200))
    token = db.Column(db.String(200))
   
    def __init__(self, cid, username, password, token):
        self.username = username
        self.password = password
        self.token = token
        self.id = cid
    '''
    def __init__(self):
        pass
    '''

class CredentialRepository:
    
    def query_all_credential(self):
        return Credential.query.all()
    '''
    def __init__(self):
        self.repository = Credential()
    '''
    def entity_version(self):
        return '1.0'

if __name__ == "__main__":
    cr = CredentialRepository()
    allc = cr.entity_version()
    print(allc)