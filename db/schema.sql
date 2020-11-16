-- DROP DATABASE IF EXISTS stock_db;
CREATE DATABASE stock_db;

USE stock_db;

CREATE TABLE stocks (
  id INT AUTO_INCREMENT NOT NULL,
  stock_name VARCHAR(255),
  stock_symbol VARCHAR(255),
  price INT,
  change_dollar DECIMAL,
  change_percent DECIMAL,
  portfolio BOOLEAN DEFAULT FALSE,
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id INT AUTO_INCREMENT,
  user_name VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE portfolio (
  id INT AUTO_INCREMENT NOT NULL,
  portfolio BOOLEAN ,
  user_name VARCHAR(255),
  comp_name VARCHAR(255),
  stock_symbol VARCHAR(255),
  price INT,
  change_dollar DECIMAL,
  change_percent DECIMAL,
  PRIMARY KEY (id)
  FOREIGN KEY (user_name) REFERENCES users(user_name),
  FOREIGN KEY (comp_name) REFERENCES stocks(comp_name),
  FOREIGN KEY (price) REFERENCES stocks(price)
  FOREIGN KEY (change_dollar) REFERENCES stocks(change_dollar),
  FOREIGN KEY (change_percent) REFERENCES stocks(change_percent)
  FOREIGN KEY (stock_symbol) REFERENCES stocks(stock_symbol),
  FOREIGN KEY (portfolio) REFERENCES stocks (portfolio)
);

SELECT * FROM stocks
SELECT * FROM users
SELECT * FROM portfolio