
create table pkmn_type (
  id int unsigned primary key auto_increment not null,
  name varchar(50) not null,
  image varchar(255) not null
);

create table pokemon (
  id int unsigned primary key auto_increment not null,
  name varchar(50) not null,
  description varchar(255) not null,
  image varchar(255) not null
);

ALTER TABLE pokemon
ADD COLUMN pkmn_type_id INTEGER,
ADD CONSTRAINT fk_type_id FOREIGN KEY (pkmn_type_id) REFERENCES pkmn_type(id);

INSERT INTO pkmn_type (id, name, image) VALUES
(1, 'Grass', 'http://www.rw-designer.com/icon-view/21171.png'),
(2, 'Fire', 'http://www.rw-designer.com/icon-view/21169.png'),
(3, 'Water', 'http://www.rw-designer.com/icon-view/21170.png'),
(4, 'Bug', 'http://www.rw-designer.com/icon-view/21178.png'),
(5, 'Normal', 'http://www.rw-designer.com/icon-view/21168.png'),
(6, 'Flying', 'http://www.rw-designer.com/icon-view/21175.png'),
(7, 'Poison', 'http://www.rw-designer.com/icon-view/21183.png'),
(8, 'Electric', 'http://www.rw-designer.com/icon-view/21179.png'),
(9, 'Ground', 'http://www.rw-designer.com/icon-view/21172.png'),
(10, 'Psychic', 'http://www.rw-designer.com/icon-view/21185.png'),
(11, 'Fighting', 'http://www.rw-designer.com/icon-view/21181.png'),
(12, 'Rock', 'http://www.rw-designer.com/icon-view/21174.png'),
(13, 'Ghost', 'http://www.rw-designer.com/icon-view/21187.png'),
(14, 'Ice', 'http://www.rw-designer.com/icon-view/21176.png'),
(15, 'Dragon', 'http://www.rw-designer.com/icon-view/21189.png'),
(16, 'Steel', 'http://www.rw-designer.com/icon-view/21180.png'),
(17, 'Dark', 'http://www.rw-designer.com/icon-view/21184.png'),
(18, 'Fairy', 'http://www.rw-designer.com/icon-view/21188.png');
 

 INSERT INTO pokemon (id, name, description, image) VALUES
(1, 'Bulbasaur', 'A grass/poison-type Pokémon with a plant bulb on its back.', 'https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/70px-0001Bulbasaur.png'),
(2, 'Ivysaur', 'The evolved form of Bulbasaur with a larger plant bulb.', 'https://archives.bulbagarden.net/media/upload/thumb/8/81/0002Ivysaur.png/70px-0002Ivysaur.png'),
(3, 'Venusaur', 'The final evolution of Bulbasaur with a large flower on its back.', 'https://archives.bulbagarden.net/media/upload/thumb/6/6b/0003Venusaur.png/70px-0003Venusaur.png'),
(4, 'Charmander', 'A fire-type Pokémon with a flame on its tail.', 'https://archives.bulbagarden.net/media/upload/thumb/2/27/0004Charmander.png/70px-0004Charmander.png'),
(5, 'Charmeleon', 'The evolved form of Charmander with a larger flame.', 'https://archives.bulbagarden.net/media/upload/thumb/0/05/0005Charmeleon.png/70px-0005Charmeleon.png'),
(6, 'Charizard', 'The final evolution of Charmander with powerful fire attacks.', 'https://archives.bulbagarden.net/media/upload/thumb/3/38/0006Charizard.png/70px-0006Charizard.png'),
(7, 'Squirtle', 'A water-type Pokémon with a shell on its back.', 'https://archives.bulbagarden.net/media/upload/thumb/5/54/0007Squirtle.png/70px-0007Squirtle.png'),
(8, 'Wartortle', 'The evolved form of Squirtle with a larger shell.', 'https://archives.bulbagarden.net/media/upload/thumb/0/0f/0008Wartortle.png/70px-0008Wartortle.png'),
(9, 'Blastoise', 'The final evolution of Squirtle with powerful water cannons on its shell.', 'https://archives.bulbagarden.net/media/upload/thumb/0/0a/0009Blastoise.png/70px-0009Blastoise.png'),
(10, 'Caterpie', 'A bug-type Pokémon with a voracious appetite for leaves.', 'https://archives.bulbagarden.net/media/upload/thumb/5/5e/0010Caterpie.png/70px-0010Caterpie.png'),
(11, 'Metapod', 'The evolved form of Caterpie, undergoing metamorphosis.', 'https://archives.bulbagarden.net/media/upload/thumb/d/da/0011Metapod.png/70px-0011Metapod.png'),
(12, 'Butterfree', 'The final evolution of Caterpie, a graceful butterfly with powdery wings.', 'https://archives.bulbagarden.net/media/upload/thumb/5/55/0012Butterfree.png/70px-0012Butterfree.png'),
(13, 'Weedle', 'A bug/poison-type Pokémon with a sharp stinger on its head.', 'https://archives.bulbagarden.net/media/upload/thumb/3/36/0013Weedle.png/70px-0013Weedle.png'),
(14, 'Kakuna', 'The evolved form of Weedle, hardening its shell for protection.', 'https://archives.bulbagarden.net/media/upload/thumb/f/f3/0014Kakuna.png/70px-0014Kakuna.png'),
(15, 'Beedrill', 'The final evolution of Weedle, a menacing Pokémon with poison stingers.', 'https://archives.bulbagarden.net/media/upload/thumb/f/f7/0015Beedrill.png/70px-0015Beedrill.png'),
(16, 'Pidgey', 'A normal/flying-type Pokémon with a keen eye and excellent flying abilities.', 'https://archives.bulbagarden.net/media/upload/thumb/0/0c/0016Pidgey.png/70px-0016Pidgey.png'),
(17, 'Pidgeotto', 'The evolved form of Pidgey, a bird with larger wings and more powerful attacks.', 'https://archives.bulbagarden.net/media/upload/thumb/8/82/0017Pidgeotto.png/70px-0017Pidgeotto.png'),
(18, 'Pidgeot', 'The final evolution of Pidgey, a majestic bird with impressive wingspan.', 'https://archives.bulbagarden.net/media/upload/thumb/7/73/0018Pidgeot.png/70px-0018Pidgeot.png'),
(19, 'Rattata', 'A normal-type Pokémon known for its speed and agility.', 'https://archives.bulbagarden.net/media/upload/thumb/a/aa/0019Rattata.png/70px-0019Rattata.png'),
(20, 'Raticate', 'The evolved form of Rattata, a fast and aggressive rodent Pokémon.', 'https://archives.bulbagarden.net/media/upload/thumb/2/2c/0020Raticate.png/70px-0020Raticate.png'),
(21, 'Spearow', 'A normal/flying-type Pokémon with a sharp beak for hunting.', 'https://archives.bulbagarden.net/media/upload/thumb/2/2d/0021Spearow.png/70px-0021Spearow.png'),
(22, 'Fearow', 'The evolved form of Spearow, a large bird with powerful beak attacks.', 'https://archives.bulbagarden.net/media/upload/thumb/9/92/0022Fearow.png/70px-0022Fearow.png'),
(23, 'Ekans', 'A poison-type Pokémon with a serpentine appearance.', 'https://archives.bulbagarden.net/media/upload/thumb/d/d2/0023Ekans.png/70px-0023Ekans.png'),
(24, 'Arbok', 'The evolved form of Ekans, a large cobra Pokémon with a hood.', 'https://archives.bulbagarden.net/media/upload/thumb/5/51/0024Arbok.png/70px-0024Arbok.png'),
(25, 'Pikachu', 'An electric-type Pokémon with yellow fur.', 'https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/70px-0025Pikachu.png'),
(26, 'Raichu', 'The evolved form of Pikachu, an electric Pokémon with enhanced power.', 'https://archives.bulbagarden.net/media/upload/thumb/b/b0/0026Raichu.png/70px-0026Raichu.png');

UPDATE pokemon SET type_id = 1 WHERE id IN (1, 2, 3);