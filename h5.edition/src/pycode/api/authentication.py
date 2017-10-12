'''
    REFER TO: 
    https://blog.miguelgrinberg.com/post/restful-authentication-with-flask
'''
import base_resource
from flask_restful import Resource, fields, marshal_with, reqparse
from authentication_service import AuthenticationService

credential_resource_fields = {
    'username': fields.String,
    'password': fields.String
}

class AuthenticationResource(Resource):
    '''
    Authentication to determine if the api is available
    '''
    def __init__(self):
        self.auth_service = AuthenticationService()

    #@marshal_with(credential_resource_fields, envelope='credential')
    def get(self, username, password):
        #result = self.auth_service.authenticate_credential(username, password)
        #return result, 201
        #print(credential_resource_fields)
        parser = reqparse.RequestParser()
        parser.add_argument('username', type=str)
        parser.add_argument('password', type=str)
        print(parser.parse_args())
        return 200
