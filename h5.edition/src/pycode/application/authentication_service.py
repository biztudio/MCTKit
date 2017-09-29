'''
    Authentication Service
'''
from app_service import ApplicationBase
from credential_service import CredentialService, Authentication_Result_Enum

class AuthenticationService(ApplicationBase):
    def __init__(self):
        self.domainservice = CredentialService()

    def authentication(self, username, password):
        credential_result = self.domainservice.authentication(username, password)
        return credential_result

if __name__ == '__main__':
    app_svr = AuthenticationService()
    auth_result = app_svr.authentication('mctuser', '1') 
    print(auth_result)
