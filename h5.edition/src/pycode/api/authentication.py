'''
    REFER TO: 
    https://blog.miguelgrinberg.com/post/restful-authentication-with-flask
'''
import base_resource
from flask_restful import Resource, reqparse, fields, marshal_with
from authentication_service import AuthenticationService

authentication_fields = {
    'result':fields.String
}

class AuthenticationResource(Resource):
    '''
    Authentication to determine if the api is available
    '''
    def __init__(self):
        self.parser = reqparse.RequestParser()
        self.auth_service = AuthenticationService()

    @marshal_with(authentication_fields, envelope='authentication')
    def post(self):
        self.parser.add_argument('username')
        self.parser.add_argument('password')
        args = self.parser.parse_args()
        result = self.auth_service.authenticate_credential(args['username'], args['password'])
        print(result)
        return result, 201
