'''
   Host flask app in Tornado
'''
from tornado.wsgi import WSGIContainer
from tornado.httpserver import HTTPServer
from tornado.ioloop import IOLoop
from main import app #module initializes the Flask instance

http_server = HTTPServer(WSGIContainer(app))
http_server.listen(5108)  #flask default port is 5000
IOLoop.instance().start()