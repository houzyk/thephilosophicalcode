from flask import Flask, send_file

app = Flask(__name__)

PEOPLE_FILE_PATH = "../content/people.json"

@app.route("/")
def index():
	return {
		"routes": {
			"people": "/people",
            "stuff": "/stuff",
            "articles": "/articles",
		}
	}

@app.route("/people")
def people():
	return send_file(path_or_file = PEOPLE_FILE_PATH)

@app.route("/stuff")
def stuff():
	return ""

@app.route("/articles")
def articles():
	return ""

@app.route("/articles/<string:title>")
def article(title):
	return ""
