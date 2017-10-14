'''

    Refer links:
    http://blog.csdn.net/Jerry_1126/article/details/76409042
'''
import os, sys
folder = os.path.abspath(os.path.dirname(__file__))
app_foler = folder.replace("api","application")
sys.path.append(app_foler)

print('API resource is being consuming...')

from flaskapp import app, bearer_token_auth
from itsdangerous import (TimedJSONWebSignatureSerializer as Serializer, 
                          BadSignature, SignatureExpired)

@bearer_token_auth.verify_token
def verify_token(token):
    s = Serializer(app.config['SECRET_KEY'])
    try:
        data = s.loads(token)
    except SignatureExpired:
        print('valid token, but expired')
        return False
    except BadSignature:
        print('Invalid token')
        return False
    return True
