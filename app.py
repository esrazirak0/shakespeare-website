from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return "Hello from Shakespeare Flask App!"

if name == '__main__':
    app.run(debug=True)