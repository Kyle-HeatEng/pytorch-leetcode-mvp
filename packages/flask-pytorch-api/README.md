## Set up for Flask PyTorch API

This api allows the Next.js Client to send a snippet of code for the server to run and return the output. MVP for pytorch courses.

### Set up the virtual environment

```bash
python3 -m venv venv
source venv/bin/activate
```

#### Deactivate the virtual environment

```bash
deactivate
```

### Install the requirements

```bash
pip install -r requirements.txt
```

### Run the server

```bash
cd src && flask run
```

