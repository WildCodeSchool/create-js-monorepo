

CREATE TABLE reader (
  id INT PRIMARY KEY key auto_increment NOT NULL,
  email VARCHAR(100) NOT NULL,
  password VARCHAR(255) NOT NULL,
  username VARCHAR(100) NOT NULL
);

CREATE TABLE book (
  id INT PRIMARY KEY key auto_increment NOT NULL,
  title VARCHAR(100) NOT NULL,
  author VARCHAR(100) NOT NULL,
  parutionYear YEAR NULL,
  summary TEXT NOT NULL
);

CREATE TABLE reading (
  id INT PRIMARY KEY key auto_increment NOT NULL,
  id_reader INT NOT NULL,
  CONSTRAINT fk_reading_reader
  Foreign Key (id_reader) REFERENCES reader(id),
  id_book int NOT NULL,
  constraint fk_reading_book
  Foreign Key (id_book) REFERENCES book(id),
  opinion TEXT NOT NULL
);


-- création des lecteurs utilisateurs
INSERT INTO reader (email, password, username) VALUES
('ginette@gmail.com', 'bookshop', 'gigi'),
('emile@gmail.com', 'bookshop', 'mimile');

-- création des livres
INSERT INTO book (title, author, parutionYear, summary) VALUES 
('Le Donjon de Naheulbeuk - La couette de l oubli', 'John Lang', "2008", "Jouez hautbois, résonnez trompettes, les héros du Donjon de Naheulbeuk reprennent du service ! Ils se croyaient sortis d'affaire après avoir rempli leur contrat... que nenni ! En rapportant à leur commanditaire, le sorcier Gontran Théogal, la douzième statuette de Gladeulfeurha, ils ont oeuvré à leur insu pour l'avènement de Dlul, le dieu du sommeil et de l'ennui, qui menace d'engloutir le monde dans la Grande Couette de l'Oublie Éternel. Il va bien falloir que quelqu'un s'y colle, mais entre les guerres de religion qui agitent les terres de Fhang, les objectifs incertains des Oracles et le déplorable humour nain, ça s'annonce compliqué !"),
('Le Donjon de Naheulbeuk - L orbe de Xaraz', 'John Lang', "2011", "Après leurs précédentes mésaventures, les héros du Donjon de Naheulbeuk pensaient enfin pouvoir se la couler douce, mais il faut croire qu'une telle activité ne figure pas au programme de leur fiche de personnage ! Jugez plutôt : l'un des leurs est resté sur le carreau, et aucun d'entre eux ne maîtrise le sort de résurrection. Direction Waldorg, la cité des magiciens, qui regorge de gens compétents, mais un brin susceptibles. Avec leur chance coutumière, nos aventuriers arrivent une fois encore au mauvais endroit et au plus mauvais moment...");

INSERT INTO reading (id_reader, id_book, opinion) VALUES 
(1, 2, "super livre et bonne suite des deux premier tomes, on voit bien l'évolution des personnages "), 
(1, 1, "top même si les personnages sont agaçants à la longue... "), 
(2, 2, "tip top, très bon moment de lecture");