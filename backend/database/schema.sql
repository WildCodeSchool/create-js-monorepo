-- SQLBook: Code


CREATE TABLE
    infoclub (
        id int primary key auto_increment not null,
        label VARCHAR(255) NOT NULL,
        number_title_off_champion VARCHAR(255) NOT NULL,
        number_title_off_national_cup VARCHAR(255) NOT NULL,
        number_title_off_europ_cup VARCHAR(255) not NULL
    );

    CREATE TABLE
    team (
        id int unsigned primary key auto_increment not null,
        club_id INTEGER NOT NULL,
        city VARCHAR(255) NOT NULL,
        stade VARCHAR(255) NOT NULL,
        create_date year not null,
        FOREIGN KEY(club_id) REFERENCES infoclub(id)
    );