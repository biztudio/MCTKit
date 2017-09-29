import os, sys
folder = os.path.abspath(os.path.dirname(__file__))
domain_foler = folder.replace("application","domain")
sys.path.append(domain_foler)

#from domain_service import DomainBase

class ApplicationBase:
    def __init__(self):
        pass

    def get_domain_version(self):
        return '1.0'
