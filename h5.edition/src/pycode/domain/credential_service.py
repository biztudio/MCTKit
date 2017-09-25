'''
    Credential Domain Service
'''
from repository.credential import CredentialRepository

class CredentialService:
    def __init__(self):
        self.repository = CredentialRepository()

    def authentication(self, username, password):
        all_credential = self.repository.query_all_credential()
        print(all_credential)

if __name__ == '__main__':
    credential_domain = CredentialService()
    credential_domain.authentication('mctuser','')