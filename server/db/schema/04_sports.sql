DROP TABLE IF EXISTS sports CASCADE;

CREATE TABLE sports (

  id SERIAL PRIMARY KEY NOT NULL,
  sport_name VARCHAR(225) NOT NULL,
  photo_url text

);