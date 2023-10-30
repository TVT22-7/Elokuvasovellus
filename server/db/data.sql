CREATE DATABASE elokuvasovellus;

CREATE TABLE users (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255),
  user_email VARCHAR(255) UNIQUE
);

INSERT INTO users (id, name, user_email) VALUES ('1', 'Veikka', 'veikka@example.com');