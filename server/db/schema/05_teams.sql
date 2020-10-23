DROP TABLE IF EXISTS teams CASCADE;

CREATE TABLE teams (

  id SERIAL PRIMARY KEY NOT NULL,
  team_name VARCHAR(225) NOT NULL,
  team_logo_url text,
  sport_id INTEGER REFERENCES sports(id) ON DELETE CASCADE

);