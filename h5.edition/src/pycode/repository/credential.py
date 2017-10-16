'''
    Credential repository
'''
from base_entity import db

class Credential(db.Model):
    '''
        Example: To optimize memory consumption
    '''            
    #__slots__ = ('id', 'username', 'password', 'token')
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(200))
    password = db.Column(db.String(200))
    token = db.Column(db.String(200))

    def __init__(self, username, password, token):
        self.username = username
        self.password = password
        self.token = token
        #self.id = cid
    
class CredentialRepository:
    
    def query_all_credential(self):
        return Credential.query.all()
    
    def query_credential_by_username(self, username):
        return Credential.query.filter_by(username=username).first()

    def entity_version(self):
        return '1.0'

if __name__ == "__main__":
    cr = CredentialRepository()
    allc = cr.query_all_credential()    
    print(allc)