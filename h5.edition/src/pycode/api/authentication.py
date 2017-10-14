'''
    REFER TO: 
    https://blog.miguelgrinberg.com/post/restful-authentication-with-flask
'''
import base_resource
from flask import request, jsonify
from flask_restful import Resource, fields, marshal_with
from authentication_service import AuthenticationService

authentication_result_fields = {
    'result': fields.String,
    'token':fields.String
}

class AuthenticationResource(Resource):
    '''
    Authentication to determine if the api is available
    '''
    def __init__(self):
        self.auth_service = AuthenticationService()

    @marshal_with(authentication_result_fields, envelope='authentication')
    def post(self):
        username = request.form.get('username')
        password = request.form.get('password')
        result = self.auth_service.authenticate_credential(username, password).value
        return {'result':result, 'token':''}, 201
