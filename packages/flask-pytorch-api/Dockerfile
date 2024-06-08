# Use an official Python runtime as a parent image
FROM python:3.10-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy the local directory contents into the container at /usr/src/app
COPY . .

# Install any needed packages specified in requirements.txt
RUN python -m pip install --upgrade pip && \
    pip install -r requirements.txt

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Define environment variable
ENV FLASK_APP=src/app.py
ENV FLASK_RUN_HOST=0.0.0.0

# Run the app when the container launches
CMD ["flask", "run"]
