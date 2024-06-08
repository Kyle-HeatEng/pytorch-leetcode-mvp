from flask import Blueprint, request, jsonify
from flask_cors import cross_origin
import subprocess
import sys

router = Blueprint('pytorch', __name__, url_prefix='/api/pytorch')


@router.post('/answer')
@cross_origin()
def answer():
    # Extract JSON data from request
    data = request.get_json()
    code = data.get('answer', '')
    
    # Split the code into lines and join it back for subprocess execution
    code_to_run = '\n'.join(code.splitlines())
    print(code_to_run)
    print("Executing code:", code_to_run)
    
    python_executable = sys.executable  # This fetches the current Python executable path
    # Prepare the command to run the Python code in a child process
    # It assumes the Python code requires a PyTorch environment
    try:
        result = subprocess.run([python_executable, '-c', code_to_run], capture_output=True, text=True, check=True, env={"PYTHONPATH": "."})
        output = result.stdout
        error = result.stderr
    except subprocess.CalledProcessError as e:
        output = e.stdout
        error = e.stderr

    # Return the result as JSON
    return jsonify({
        'output': output,
        'error': error,
        'code': code_to_run
    }), 200