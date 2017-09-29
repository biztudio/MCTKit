import os, sys
folder = os.path.abspath(os.path.dirname(__file__))
repository_foler = folder.replace("domain","repository")
sys.path.append(repository_foler)

#print(repository_foler)
#print(sys.path)

class DomainBase:
    def __init__(self):
        pass

    def get_version(self):
        return '1.0'    