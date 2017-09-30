import os, sys
folder = os.path.abspath(os.path.dirname(__file__))
app_foler = folder.replace("api","application")
sys.path.append(app_foler)