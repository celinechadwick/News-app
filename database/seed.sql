-- Drop DB if exists
DROP DATABASE IF EXISTS photos_db;

-- Create DB
CREATE DATABASE photos_db;

-- Connect to DB
\c photos_db;

DROP TABLE IF EXISTS photos CASCADE;

CREATE TABLE photos(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) UNIQUE,
  img_url VARCHAR(255),
  location VARCHAR(255) UNIQUE,
  password_digest VARCHAR(255) NOT NULL
);

CREATE TABLE tags (
  id BIGSERIAL PRIMARY KEY,
  tag VARCHAR(255),
  photo_id INTEGER NOT NULL,
  FOREIGN KEY (photo_id) REFERENCES photos(id),
);
