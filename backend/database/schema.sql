-- SQLBook: Code


CREATE TABLE
    infoclub (
        id int primary key auto_increment not null,
        label VARCHAR(255) NOT NULL,
        number_title_off_champion VARCHAR(255) NOT NULL,
        number_title_off_national_cup VARCHAR(255) NOT NULL,
        number_title_off_europ_cup VARCHAR(255) not NULL
    );

     INSERT INTO infoclub(number_title_off_champion, number_title_off_national_cup, number_title_off_europ_cup) VALUE ('11', '14', '1');
     INSERT INTO infoclub(number_title_off_champion, number_title_off_national_cup, number_title_off_europ_cup) VALUE ('9', '10', '1');
     INSERT INTO infoclub(number_title_off_champion, number_title_off_national_cup, number_title_off_europ_cup) VALUE ('4', '3', '0');
     INSERT INTO infoclub(number_title_off_champion, number_title_off_national_cup, number_title_off_europ_cup) VALUE ('11', '14', '0');
     INSERT INTO infoclub(number_title_off_champion, number_title_off_national_cup, number_title_off_europ_cup) VALUE ('11', '14', '0');
     INSERT INTO infoclub(number_title_off_champion, number_title_off_national_cup, number_title_off_europ_cup) VALUE ('11', '14', '0')

    CREATE TABLE
    team (
        id int unsigned primary key auto_increment not null,
        club_id INTEGER NOT NULL,
        city VARCHAR(255) NOT NULL,
        stade VARCHAR(255) NOT NULL,
        create_date year not null,
        FOREIGN KEY(club_id) REFERENCES infoclub(id)
    );

     INSERT INTO team(club_id, city, stade, create_date) VALUES ('PSG', 'Paris', 'Parc des Prince', '1970');

     INSERT INTO team(club_id, city, stade, create_date) VALUES ('OM', 'Marseille', 'Orange Vélodrome', '1904');
    NSERT INTO team(club_id, city, stade, create_date) VALUES ('OGCN', 'Nice', 'L'Allianz Riviera', '1908');
    NSERT INTO team(club_id, city, stade, create_date) VALUES ('SR', 'Rennes', 'Roazon Park', '1970');

    NSERT INTO team(club_id, city, stade, create_date) VALUES ('RCL', 'Lens', 'Stade Bollaert', '1970');
    NSERT INTO team(club_id, city, stade, create_date) VALUES ('AJA', 'Auxerre', 'Stade Abbé Deschamp', '1970');


