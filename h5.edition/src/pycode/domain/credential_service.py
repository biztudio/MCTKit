'''
    Credential Domain Service
'''
from enum import Enum
from domain_service import DomainBase
from credential import CredentialRepository
from itsdangerous import TimedJSONWebSignatureSerializer as Serializer
from flaskapp import app, token_expiration_seconds

class Authentication_Result_Enum(Enum):
    Valid = 1
    InvalidUsername = 0 
    InvalidPassword = -1

class CredentialService(DomainBase):
    def __init__(self):
        self.repository = CredentialRepository()

    def authentication(self, username, password):
        credential = self.repository.query_credential_by_username(username)  
        authentication_result = {'uid':0, 'username':'', 'token':'', 'validation':''}      
        if credential:
            authentication_result['uid'] = credential.id
            authentication_result['username'] = credential.username
            if credential.password == password:
                s = Serializer(app.config['SECRET_KEY'], expires_in = token_expiration_seconds)
                authentication_result['token'] = s.dumps({ 'id': credential.id }).decode('ascii') 
                authentication_result['validation'] = Authentication_Result_Enum.Valid.value
            else:
                authentication_result['validation'] = Authentication_Result_Enum.InvalidPassword.value
        else:
            authentication_result['validation'] = Authentication_Result_Enum.InvalidUsername.value
        return authentication_result
