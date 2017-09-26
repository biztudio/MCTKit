'''
    Credential Domain Service
'''
from domain_service import DomainBase
from credential import CredentialRepository

class CredentialService(DomainBase):
    def __init__(self):
        self.repository = CredentialRepository()

    def authentication(self, username, password):
        credential = self.repository.query_credential_by_username(username)        
        if credential:
            if credential.password == password:
                return 1
            else:
                return -1
        else:
            return 0

if __name__ == '__main__':
    credential_domain = CredentialService()
    auth_resutl = credential_domain.authentication('mctuser','1')
    print(auth_resutl)