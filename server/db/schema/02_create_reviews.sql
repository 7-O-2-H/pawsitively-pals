DROP TABLE IF EXISTS reviews CASCADE;
--CREATE reviewa
CREATE TABLE reviews (
  id SERIAL PRIMARY KEY,
  review TEXT,
  reviewer VARCHAR(50)
);