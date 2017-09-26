'''
    Credential Domain Service
'''
from enum import Enum
from domain_service import DomainBase
from credential import CredentialRepository

class Authentication_Result_Enum(Enum):
    Valid = 1
    InvalidUsername = 0 
    InvalidPassword = -1

class CredentialService(DomainBase):
    def __init__(self):
        self.repository = CredentialRepository()

    def authentication(self, username, password):
        credential = self.repository.query_credential_by_username(username)        
        if credential:
            if credential.password == password:
                return Authentication_Result_Enum.Valid
            else:
                return Authentication_Result_Enum.InvalidPassword
        else:
            return Authentication_Result_Enum.InvalidUsername

if __name__ == '__main__':
    credential_domain = CredentialService()
    auth_resutl = credential_domain.authentication('mctuser','1')
    print(auth_resutl)
