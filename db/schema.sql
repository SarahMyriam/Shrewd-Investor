DROP DATABASE IF EXISTS stock_db;
CREATE DATABASE stock_db;

USE stock_db;

CREATE TABLE stocks (
  id INT AUTO_INCREMENT,
  comp_name VARCHAR(255),
  stock_symbol VARCHAR(255),
  logo VARCHAR(255),
  price INT,
  change_dollar DECIMAL,
  change_percent DECIMAL,
  favorite BOOLEAN DEFAULT 0,
  invested BOOLEAN DEFAULT 0,
  PRIMARY KEY (id)
);

CREATE TABLE users (
  id INT AUTO_INCREMENT,
  user_name VARCHAR(255),
  email VARCHAR(255),
  password VARCHAR(255),
  PRIMARY KEY (id)
);

CREATE TABLE favorite (
  id INT AUTO_INCREMENT,
  user_id VARCHAR(255),
  stock_id VARCHAR(255),
  password VARCHAR(255),
  PRIMARY KEY (id)
);