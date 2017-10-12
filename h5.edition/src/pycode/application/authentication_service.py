'''
    Authentication Service
'''
from app_service import ApplicationBase
from credential_service import CredentialService, Authentication_Result_Enum

class AuthenticationService(ApplicationBase):
    def __init__(self):
        self.domainservice = CredentialService()

    def authenticate_credential(self, username, password):
        credential_result = self.domainservice.authentication(username, password)
        return credential_result
