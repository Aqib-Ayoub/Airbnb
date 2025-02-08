# Use a slim Python image
FROM python:3.12.2-slim-bullseye

# Set the working directory
WORKDIR /usr/src/djangobnb_backend

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apt-get update && apt-get install -y netcat

# Install system dependencies for PostgreSQL and build tools
RUN apt-get update && apt-get install -y \
    libpq-dev gcc python3-dev musl-dev && \
    rm -rf /var/lib/apt/lists/*

# Upgrade pip
RUN pip install --upgrade pip

# Copy the requirements file
COPY ./requirements.txt .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

COPY ./entrypoint.sh .
RUN sed -i 's/\r$//g' /usr/src/djangobnb_backend/entrypoint.sh
RUN chmod +x /usr/src/djangobnb_backend/entrypoint.sh

# Copy project files
COPY . .

ENTRYPOINT [ "/usr/src/djangobnb_backend/entrypoint.sh" ]

# Expose the port for Django
EXPOSE 8000

# Run the Django app
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]

# FROM python:3.12.2-slim-bullseye

# # WORKDIR /backend/djangobnb_backend
# WORKDIR /usr/src/djangobnb_backend



# ENV PYTHONDONTWRITEBYTECODE 1
# ENV PYTHONUNBUFFERED 1

# RUN pip install --upgrade pip
# COPY ./requirements.txt .
# RUN pip install -r requirements.txt

# COPY . .
