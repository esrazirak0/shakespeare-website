from flask import Flask, request, jsonify
import sqlite3

app = Flask(__name__, static_folder=".", static_url_path="")


def create_database():
    connection = sqlite3.connect("messages.db")
    cursor = connection.cursor()

    cursor.execute("""
        CREATE TABLE IF NOT EXISTS messages (
            id INTEGER PRIMARY KEY,
            name TEXT,
            message TEXT
        )
    """)

    connection.commit()
    connection.close()


@app.route("/")
def home():
    return app.send_static_file("index.html")


@app.route("/messages", methods=["POST"])
def save_message():
    data = request.get_json()

    connection = sqlite3.connect("messages.db")
    cursor = connection.cursor()

    cursor.execute(
        "INSERT INTO messages (name, message) VALUES (?, ?)",
        (data["name"], data["message"])
    )

    connection.commit()
    connection.close()

    return jsonify({"status": "saved"})


if __name__ == "__main__":
    create_database()
    app.run(debug=True)
