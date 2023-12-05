-- Active: 1699434091546@@dpg-cl5kp3s72pts73eno220-a.frankfurt-postgres.render.com@5432@elokuvasovellus_0lmg
CREATE DATABASE elokuvasovellus;

-- User Table

CREATE TABLE
    users (
        user_id SERIAL PRIMARY KEY,
        username VARCHAR(255) UNIQUE NOT NULL,
        user_email VARCHAR(255),
        password VARCHAR(255) NOT NULL
    );

-- Group Table

CREATE TABLE
    groups (
        group_id SERIAL PRIMARY KEY,
        group_name VARCHAR(255) UNIQUE NOT NULL,
        description TEXT,
       
    );

-- Group Members Table

CREATE TABLE
    group_members (
        group_member_id SERIAL PRIMARY KEY,
        group_id INT REFERENCES groups(group_id),
        user_id INT REFERENCES users(user_id),
        status VARCHAR(50) CHECK (
            status IN (
                'Pending',
                'Approved',
                'Denied'
            )
        )
    );

-- Movies and Series Table

CREATE TABLE
    movies_series (
        movie_id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        description TEXT,
        release_date DATE,
        genre VARCHAR(255) -- Add other relevant fields as needed
    );

-- Reviews Table

CREATE TABLE
    reviews (
        review_id SERIAL PRIMARY KEY,
        movie_id INT REFERENCES movies_series(movie_id),
        user_id INT REFERENCES users(user_id),
        rating NUMERIC CHECK (
            rating BETWEEN 1 AND 5
        ),
        review_text TEXT
    );

-- News Table

CREATE TABLE
    news (
        news_id SERIAL PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        content TEXT,
        link VARCHAR(255)
    );

-- Group News Table

CREATE TABLE
    group_news (
        group_news_id SERIAL PRIMARY KEY,
        news_id INT REFERENCES news(news_id),
        group_id INT REFERENCES groups(group_id)
    );

-- User Custom Views Table

CREATE TABLE
    user_custom_views (
        view_id SERIAL PRIMARY KEY,
        user_id INT REFERENCES users(user_id),
        content TEXT
    );

INSERT INTO
    users (user_id, username, user_email, password)
VALUES (
        '1',
        'Otso',
        'mail@example.com',
        '1234'
    );