CREATE TABLE Candidat (
    id INT AUTO_INCREMENT,
    nom VARCHAR(100),
    prenom VARCHAR(100),
    age INT,
    region VARCHAR(100),
    adresse_salon VARCHAR(255),
    photo VARCHAR(500),
    photo2 VARCHAR(500),
    email VARCHAR(500),
    mot_de_passe VARCHAR(100),
    selectionne BOOLEAN,
    PRIMARY KEY (id)
);

CREATE TABLE Votant (
    id INT AUTO_INCREMENT,
    nom VARCHAR(100),
    prenom VARCHAR(100),
    age INT,
    region VARCHAR(100),
    email VARCHAR(500),
    mot_de_passe VARCHAR(100),
    PRIMARY KEY (id)
);

INSERT INTO Candidat (nom, prenom, age, region, adresse_salon, photo, photo2, email, mot_de_passe, selectionne)
VALUES ('Dupont', 'Isabel', 35, 'Centre-Val de Loire', '123 Rue de la Coiffure', 'https://images-ext-2.discordapp.net/external/clPc1QDuJSH-DpQgDm5KTnltgITHfi__c1_oeU3vbxQ/%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.1882205395.1705507906%26semt%3Dais/https/img.freepik.com/photos-gratuite/belle-fille-se-trouve-dans-parc_8353-5084.jpg?format=webp&width=369&height=554','https://images-ext-2.discordapp.net/external/clPc1QDuJSH-DpQgDm5KTnltgITHfi__c1_oeU3vbxQ/%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.1882205395.1705507906%26semt%3Dais/https/img.freepik.com/photos-gratuite/belle-fille-se-trouve-dans-parc_8353-5084.jpg?format=webp&width=369&height=554', 'jean.dupont@example.com', 'abde154', false);

INSERT INTO Candidat (nom, prenom, age, region, adresse_salon, photo, photo2, email, mot_de_passe, selectionne)
VALUES ('Durandal', 'florence', 35, 'Centre-Val de Loire', '125 Rue de la Coiffure', 'https://images-ext-2.discordapp.net/external/I0gDo6JH0FrqXOeuTCH2MJIZx2Xac1nKTAEBeDloctY/%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.1882205395.1705507906%26semt%3Dais/https/img.freepik.com/photos-gratuite/bouchent-portrait-jeune-femme-blonde-odorante-queue-cheval-maquillage-lumineux-humeur-positive-jolie-robe-bleue-elegante_291049-2180.jpg?format=webp&width=369&height=554', 'https://images-ext-2.discordapp.net/external/I0gDo6JH0FrqXOeuTCH2MJIZx2Xac1nKTAEBeDloctY/%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.1882205395.1705507906%26semt%3Dais/https/img.freepik.com/photos-gratuite/bouchent-portrait-jeune-femme-blonde-odorante-queue-cheval-maquillage-lumineux-humeur-positive-jolie-robe-bleue-elegante_291049-2180.jpg?format=webp&width=369&height=554', 'jean.dupont@example.com', 'abde154', false);
INSERT INTO Candidat (nom, prenom, age, region, adresse_salon, photo, photo2, email, mot_de_passe, selectionne)
VALUES ('Dutetar', 'Pascale', 35, 'Centre-Val de Loire', '126 Rue de la Coiffure', 'https://images-ext-2.discordapp.net/external/X5K02ijXoChW7dqvE9Eut1j9tf_gaVyH8YWOP7p-TPo/%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.1882205395.1705507906%26semt%3Dais/https/img.freepik.com/photos-gratuite/jeune-coiffure-blond-urbain-gai_1139-835.jpg?format=webp&width=370&height=554','https://images-ext-2.discordapp.net/external/X5K02ijXoChW7dqvE9Eut1j9tf_gaVyH8YWOP7p-TPo/%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.1882205395.1705507906%26semt%3Dais/https/img.freepik.com/photos-gratuite/jeune-coiffure-blond-urbain-gai_1139-835.jpg?format=webp&width=370&height=554', 'jean.dupont@example.com', 'abde154', false);

INSERT INTO Candidat (nom, prenom, age, region, adresse_salon, photo, photo2, email, mot_de_passe, selectionne)
VALUES ('Rose', 'Marie', 35, 'Centre-Val de Loire', '1258 Rue de la Coiffure', 'https://images-ext-1.discordapp.net/external/kAuEvqdbBuTzy7ityHT0WbZ1vbbe4tHTJ6G_OfCK1EQ/%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.1882205395.1705507906%26semt%3Dais/https/img.freepik.com/photos-gratuite/sourire-femme-brune-robe-blanche-pose-dans-jardin_1304-5443.jpg?format=webp&width=370&height=554','https://images-ext-1.discordapp.net/external/kAuEvqdbBuTzy7ityHT0WbZ1vbbe4tHTJ6G_OfCK1EQ/%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.1882205395.1705507906%26semt%3Dais/https/img.freepik.com/photos-gratuite/sourire-femme-brune-robe-blanche-pose-dans-jardin_1304-5443.jpg?format=webp&width=370&height=554', 'jean.dupont@example.com', 'abde154', false);
INSERT INTO Candidat (nom, prenom, age, region, adresse_salon, photo, photo2, email, mot_de_passe, selectionne)
VALUES ('Dadune', 'Albertine', 35, 'Centre-Val de Loire', '129 Rue de la Coiffure', 'https://images-ext-2.discordapp.net/external/HBlsE4fEAbxTz8tn__YHybaTFQYZggHOAdyh2252wZw/%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.1882205395.1705507906%26semt%3Dais/https/img.freepik.com/photos-premium/portrait-belle-fille-brune-debout-dans-jardin-pres-fleurs-colorees_762067-151.jpg?format=webp&width=369&height=554','https://images-ext-2.discordapp.net/external/HBlsE4fEAbxTz8tn__YHybaTFQYZggHOAdyh2252wZw/%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.1882205395.1705507906%26semt%3Dais/https/img.freepik.com/photos-premium/portrait-belle-fille-brune-debout-dans-jardin-pres-fleurs-colorees_762067-151.jpg?format=webp&width=369&height=554', 'jean.dupont@example.com', 'abde154', true);
INSERT INTO Candidat (nom, prenom, age, region, adresse_salon, photo, photo2, email, mot_de_passe, selectionne)
VALUES ('Redaut', 'Malika', 35, 'Centre-Val de Loire', '138 Rue de la Coiffure', 'https://images-ext-1.discordapp.net/external/V7G5tL-tWfUjELk3qgKIa7HL4j0eL6SIR1TxabWcOEU/%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.1882205395.1705507906%26semt%3Dais/https/img.freepik.com/photos-gratuite/decontractee-regarder-visage-humain-personne-jeune-adulte_1301-1627.jpg?format=webp&width=369&height=554','https://images-ext-1.discordapp.net/external/V7G5tL-tWfUjELk3qgKIa7HL4j0eL6SIR1TxabWcOEU/%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.1882205395.1705507906%26semt%3Dais/https/img.freepik.com/photos-gratuite/decontractee-regarder-visage-humain-personne-jeune-adulte_1301-1627.jpg?format=webp&width=369&height=554', 'jean.dupont@example.com', 'abde154', true);
INSERT INTO Candidat (nom, prenom, age, region, adresse_salon, photo, photo2, email, mot_de_passe, selectionne)
VALUES ('Revol', 'Manuelle', 35, 'Centre-Val de Loire', '1259 Rue de la Coiffure', 'https://images-ext-2.discordapp.net/external/3CHBk2HRk0OL4c0e05eejmz9isNPsPDiuX2hv8_fNoY/%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.1882205395.1705507906%26semt%3Dais/https/img.freepik.com/photos-gratuite/bouchent-portrait-femme-tendre-magazine-incroyable-poils-longs-naturels-peau-parfaite-posant-au-jardin-fleuri-au-printemps_291049-1142.jpg?format=webp&width=369&height=554','https://images-ext-2.discordapp.net/external/3CHBk2HRk0OL4c0e05eejmz9isNPsPDiuX2hv8_fNoY/%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.1882205395.1705507906%26semt%3Dais/https/img.freepik.com/photos-gratuite/bouchent-portrait-femme-tendre-magazine-incroyable-poils-longs-naturels-peau-parfaite-posant-au-jardin-fleuri-au-printemps_291049-1142.jpg?format=webp&width=369&height=554', 'jean.dupont@example.com', 'abde154', false);
INSERT INTO Candidat (nom, prenom, age, region, adresse_salon, photo, photo2, email, mot_de_passe, selectionne)
VALUES ('Rechaut', 'Monique', 35, 'Centre-Val de Loire', '132 Rue de la Coiffure', 'https://images-ext-1.discordapp.net/external/tTiNPYoaO1I3muBZfEpsSulz6bD10osKTwKzp3d8_rs/%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.1882205395.1705507906%26semt%3Dais/https/img.freepik.com/photos-premium/belle-jeune-fille-maquillage-professionnel-coiffure-assise-dans-restaurant_2221-592.jpg?format=webp&width=370&height=554','https://images-ext-1.discordapp.net/external/tTiNPYoaO1I3muBZfEpsSulz6bD10osKTwKzp3d8_rs/%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.1882205395.1705507906%26semt%3Dais/https/img.freepik.com/photos-premium/belle-jeune-fille-maquillage-professionnel-coiffure-assise-dans-restaurant_2221-592.jpg?format=webp&width=370&height=554', 'jean.dupont@example.com', 'abde154', true);

INSERT INTO Candidat (nom, prenom, age, region, adresse_salon, photo, photo2, email, mot_de_passe, selectionne)
VALUES ('Radout', 'Véronique', 35, 'Centre-Val de Loire', '134 Rue de la Coiffure', 'https://images-ext-1.discordapp.net/external/swrrby1wr4Ofz9SNFRsQ4Cxh-ZjX9sRJDaaznegeLwo/%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.1882205395.1705507906%26semt%3Dais/https/img.freepik.com/photos-premium/portrait-gros-plan-belle-fille-vetue-robe-sombre-chapeau-noir-debout-pres-feuilles-automne_762067-1.jpg?format=webp&width=369&height=554','https://images-ext-1.discordapp.net/external/swrrby1wr4Ofz9SNFRsQ4Cxh-ZjX9sRJDaaznegeLwo/%3Fsize%3D626%26ext%3Djpg%26ga%3DGA1.1.1882205395.1705507906%26semt%3Dais/https/img.freepik.com/photos-premium/portrait-gros-plan-belle-fille-vetue-robe-sombre-chapeau-noir-debout-pres-feuilles-automne_762067-1.jpg?format=webp&width=369&height=554', 'jean.dupont@example.com', 'abde154', true);

INSERT INTO Votant (nom, prenom, age, region, email, mot_de_passe)
VALUES ('Martin', 'Marie', 30, 'Centre-Val de Loire', 'marie.martin@example.com', '1258470');
INSERT INTO Votant (nom, prenom, age, region, email, mot_de_passe)
VALUES ('Martines', 'Martine', 30, 'Centre-Val de Loire', 'martine.martines@example.com', '1258454');
INSERT INTO Votant (nom, prenom, age, region, email, mot_de_passe)
VALUES ('Martinot', 'Monique', 30, 'Centre-Val de Loire', 'martinot.monique@example.com', '12584745');
INSERT INTO Votant (nom, prenom, age, region, email, mot_de_passe)
VALUES ('Partin', 'Carinne', 30, 'Centre-Val de Loire', 'carinne.partin@example.com', '12584efrgfg');
INSERT INTO Votant (nom, prenom, age, region, email, mot_de_passe)
VALUES ('Potin', 'Murielle', 30, 'Centre-Val de Loire', 'murielle.potin@example.com', '12584fsdf');
INSERT INTO Votant (nom, prenom, age, region, email, mot_de_passe)
VALUES ('Felix', 'Elisabeth', 30, 'Centre-Val de Loire', 'elisabeth.felix@example.com', '1258470');
