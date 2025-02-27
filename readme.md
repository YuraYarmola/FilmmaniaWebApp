# Film Management System

Цей проект є системою управління фільмами, яка дозволяє користув��чам переглядати, додавати, редагувати та видаляти фільми та режисерів.

## Встановлення

1. Клонуйте репозиторій:
    ```sh
    git clone <URL>
    cd <repository>
    ```

2. Створіть та активуйте віртуальне середовище:
    ```sh
    python -m venv venv
    source venv/bin/activate  # Для Windows використовуйте `venv\Scripts\activate`
    ```

3. Встановіть залежності:
    ```sh
    pip install -r requirements.txt
    ```

## Використання

1. Запустіть сервер:
    ```sh
    python manage.py runserver
    ```

2. Відкрийте браузер і перейдіть за адресою `http://127.0.0.1:8000/` для доступу до системи управління фільмами.

## Docker

1. Побудуйте та запустіть Docker:
    ```sh
    docker build -t film-management-system .
    docker run -p 80:80 film-management-system
       ```

## Структура проекту

- `films/`: Додаток для управління фільмами та режисерами.
- `templates/`: Шаблони HTML для відображення сторінок.
- `Dockerfile`: Файл для створення Docker образу.
- `requirements.txt`: Список залежностей проекту.

## Внесок

Якщо ви хочете зробити внесок у проект, будь ласка, створіть pull request або відкрийте issue на GitHub.

## Ліцензія

Цей проект ліцензований під MIT License.