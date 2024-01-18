-- SQLBook: Code
drop table if exists user_product;
drop table if exists product;
drop table if exists user;
drop table if exists item;

create table item (
  id int primary key auto_increment not null,
  title varchar(255) not null
);

create table user (
  id int primary key auto_increment not null,
  email VARCHAR(80) NOT NULL,
  hashedPwd VARCHAR(255) NOT NULL,
  is_admin TINYINT NOT NULL,
  avatar VARCHAR(255)
);


create table product (
  id int primary key auto_increment not null,
  name VARCHAR(255) NOT NULL,
  object VARCHAR(255) NOT NULL,
  price INT NOT NULL,
  is_in_card TINYINT NOT NULL,
  vouncher VARCHAR(255) NOT NULL
);


create table user_product (
  id int primary key auto_increment not null,
  user_id INT NOT NULL,
  CONSTRAINT fk_user_product_user FOREIGN KEY (user_id) REFERENCES user(id) ON UPDATE CASCADE,
  product_id INT NOT NULL,
  CONSTRAINT fk_user_product_product FOREIGN KEY (product_id) REFERENCES product(id) ON UPDATE CASCADE
  ) ;

