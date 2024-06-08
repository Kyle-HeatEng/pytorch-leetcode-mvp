import traceback

from flask import Flask, jsonify
from werkzeug.exceptions import HTTPException
from flask_cors import CORS

from modules.pytorch.routes import router as pytorch_router

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "*"}})

app.register_blueprint(pytorch_router)
# Handle all errors
@app.errorhandler(403)
def custom_403(error):
    print(error)
    return {"message": "Access denied"}, 403

@app.errorhandler(Exception)
def handle_expection(e):
    print(traceback.format_exc())

    if not isinstance(e, HTTPException):
      return jsonify(
        message=str(e),
        status=500
      ), 500
    
    response = e.get_response()
    if not response.is_json or response.data.error is None:
      return jsonify(
        status=e.code,
        message=str(e)
      ), e.code

    return jsonify(
      status=e.code,
      message=response.data.error
    ), e.code

if __name__ == "__main__":
	app.run(host='127.0.0.1', port=5000)