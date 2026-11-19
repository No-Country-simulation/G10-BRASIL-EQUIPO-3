FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    HOME=/home/mediflow

WORKDIR /app

COPY requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir --upgrade pip \
    && pip install --no-cache-dir -r /app/requirements.txt

RUN groupadd --system --gid 10001 mediflow \
    && useradd --system --uid 10001 --gid mediflow --create-home --home-dir /home/mediflow mediflow

COPY backend/app /app/backend/app
ENV PYTHONPATH=/app/backend
WORKDIR /app/backend

USER mediflow
EXPOSE 8000

CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000", "--workers", "1"]
