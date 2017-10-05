'''

    Refer links:
    http://blog.csdn.net/Jerry_1126/article/details/76409042
'''
import os, sys
folder = os.path.abspath(os.path.dirname(__file__))
app_foler = folder.replace("api","application")
sys.path.append(app_foler)

print('API resource is being consuming...')
