-- Initial MySQL schema for the website
CREATE DATABASE IF NOT EXISTS companydb;
USE companydb;

-- Example table: leads captured from hero / contact form
CREATE TABLE IF NOT EXISTS leads (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(50),
  message TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
