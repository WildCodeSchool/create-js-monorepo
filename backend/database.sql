CREATE TABLE user (
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(50) NOT NULL,
  lastname VARCHAR(50) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  hashedPassword VARCHAR(255) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO
user (firstname, lastname, email,
hashedPassword)
VALUES
('Arthur',
'Dent',
'arthur@gmail.com',
'$argon2d$v=19$m=12,t=3,p=1$ejBtbmxxZmkxbWswMDAwMA$sBTSUhRTTx8WKm3ZNbHsXA');

CREATE TABLE types (
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  tag VARCHAR(50)
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO 
types (tag)
VALUES ('Autres'),('Epinglées');



CREATE TABLE category (
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  list VARCHAR(50) NOT NULL
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO
category (list)
VALUES ('Notes'),
('Personnel');

CREATE TABLE color (
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  color VARCHAR(20)
)ENGINE=InnoDB DEFAULT CHARSET=latin1;
INSERT INTO
color (color)
VALUES ('#EEEAEA'), ('#B171A3'), ('#EF8CC8'), ('#FOB7E4');

CREATE TABLE note (
  id INT(11) PRIMARY KEY NOT NULL AUTO_INCREMENT,
  title VARCHAR(255) NOT NULL,
  content TEXT,
  user_id INT NOT NULL,
  CONSTRAINT fk_note_user
  FOREIGN KEY (user_id)
  REFERENCES user(id),
  color_id INT,
  CONSTRAINT fk_note_color
  FOREIGN KEY (color_id)
  REFERENCES color(id),
  types_id INT,
  CONSTRAINT fk_note_types
  FOREIGN KEY (types_id)
  REFERENCES types(id),
  category_id INT,
  CONSTRAINT fk_note_category
  FOREIGN KEY (category_id)
  REFERENCES category(id)
)ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO
note (title, content, user_id, color_id, types_id, category_id)
VALUES ('Titre pro',
'préparer le résumé du cahier des charges
lire les exemples de projet
commencer la rédaction', '1', '2', '1', '1');

