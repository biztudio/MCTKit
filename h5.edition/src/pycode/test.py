'''
import os, sys
folder = os.path.abspath(os.path.dirname(__file__))
linux_path_pattern = ('/' in folder)
if linux_path_pattern:
    repository_foler = folder + '/repository'
else:     
    repository_foler = folder + '\\repository'
sys.path.append(repository_foler)
print(sys.path)

from repository.todorepository import TotoItemRepository, Todoitem

if __name__ == '__main__':
    tdRep = TotoItemRepository()
    #tdRep.add_new_todoitem(Todoitem('Add New Task', 'TEST', 1, 0))
    tdRep.complete_todoitem(3)
'''
from flaskapp import app

@app.route('/')
def home():
    return '<h1>Hello, MCTKit.T</h1>'

if __name__ == "__main__":
    app.run(debug=True)
