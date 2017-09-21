from flask import Flask
from config import DebugConfig

app = Flask(__name__)
app.config.from_object(DebugConfig)


@app.route('/')
def home():
    return '<h1>Hello, MCTKit</h1>'


if __name__ == '__main__':
    app.run()
