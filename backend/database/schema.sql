
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

INSERT INTO pkmn_type (name, image) VALUES
('Grass', 'http://www.rw-designer.com/icon-view/21171.png'),
('Fire', 'http://www.rw-designer.com/icon-view/21169.png'),
('Water', 'http://www.rw-designer.com/icon-view/21170.png'),
('Bug', 'http://www.rw-designer.com/icon-view/21178.png'),
('Normal', 'http://www.rw-designer.com/icon-view/21168.png'),
('Flying', 'http://www.rw-designer.com/icon-view/21175.png'),
('Poison', 'http://www.rw-designer.com/icon-view/21183.png'),
('Electric', 'http://www.rw-designer.com/icon-view/21179.png'),
('Ground', 'http://www.rw-designer.com/icon-view/21172.png'),
('Psychic', 'http://www.rw-designer.com/icon-view/21185.png'),
('Fighting', 'http://www.rw-designer.com/icon-view/21181.png'),
('Rock', 'http://www.rw-designer.com/icon-view/21174.png'),
('Ghost', 'http://www.rw-designer.com/icon-view/21187.png'),
('Ice', 'http://www.rw-designer.com/icon-view/21176.png'),
('Dragon', 'http://www.rw-designer.com/icon-view/21189.png'),
('Steel', 'http://www.rw-designer.com/icon-view/21180.png'),
('Dark', 'http://www.rw-designer.com/icon-view/21184.png'),
('Fairy', 'http://www.rw-designer.com/icon-view/21188.png');


 INSERT INTO pokemon (name, description, image) VALUES
('Bulbasaur', 'A grass/poison-type Pokémon with a plant bulb on its back.', 'https://archives.bulbagarden.net/media/upload/thumb/f/fb/0001Bulbasaur.png/600px-0001Bulbasaur.png'),
('Ivysaur', 'The evolved form of Bulbasaur with a larger plant bulb.', 'https://archives.bulbagarden.net/media/upload/8/81/0002Ivysaur.png'),
('Venusaur', 'The final evolution of Bulbasaur with a large flower on its back.', 'https://archives.bulbagarden.net/media/upload/thumb/6/6b/0003Venusaur.png/600px-0003Venusaur.png'),
('Charmander', 'A fire-type Pokémon with a flame on its tail.', 'https://archives.bulbagarden.net/media/upload/2/27/0004Charmander.png'),
('Charmeleon', 'The evolved form of Charmander with a larger flame.', 'https://archives.bulbagarden.net/media/upload/0/05/0005Charmeleon.png'),
('Charizard', 'The final evolution of Charmander with powerful fire attacks.', 'https://archives.bulbagarden.net/media/upload/thumb/3/38/0006Charizard.png/600px-0006Charizard.png'),
('Squirtle', 'A water-type Pokémon with a shell on its back.', 'https://archives.bulbagarden.net/media/upload/thumb/5/54/0007Squirtle.png/600px-0007Squirtle.png'),
('Wartortle', 'The evolved form of Squirtle with a larger shell.', 'https://archives.bulbagarden.net/media/upload/thumb/0/0f/0008Wartortle.png/600px-0008Wartortle.png'),
('Blastoise', 'The final evolution of Squirtle with powerful water cannons on its shell.', 'https://archives.bulbagarden.net/media/upload/thumb/0/0a/0009Blastoise.png/600px-0009Blastoise.png'),
('Caterpie', 'A bug-type Pokémon with a voracious appetite for leaves.', 'https://archives.bulbagarden.net/media/upload/thumb/5/5e/0010Caterpie.png/600px-0010Caterpie.png'),
('Metapod', 'The evolved form of Caterpie, undergoing metamorphosis.', 'https://archives.bulbagarden.net/media/upload/d/da/0011Metapod.png'),
('Butterfree', 'The final evolution of Caterpie, a graceful butterfly with powdery wings.', 'https://archives.bulbagarden.net/media/upload/thumb/5/55/0012Butterfree.png/600px-0012Butterfree.png'),
('Weedle', 'A bug/poison-type Pokémon with a sharp stinger on its head.', 'https://archives.bulbagarden.net/media/upload/thumb/3/36/0013Weedle.png/600px-0013Weedle.png'),
('Kakuna', 'The evolved form of Weedle, hardening its shell for protection.', 'https://archives.bulbagarden.net/media/upload/thumb/f/f3/0014Kakuna.png/600px-0014Kakuna.png'),
('Beedrill', 'The final evolution of Weedle, a menacing Pokémon with poison stingers.', 'https://archives.bulbagarden.net/media/upload/thumb/f/f7/0015Beedrill.png/600px-0015Beedrill.png'),
('Pidgey', 'A normal/flying-type Pokémon with a keen eye and excellent flying abilities.', 'https://archives.bulbagarden.net/media/upload/0/0c/0016Pidgey.png'),
('Pidgeotto', 'The evolved form of Pidgey, a bird with larger wings and more powerful attacks.', 'https://archives.bulbagarden.net/media/upload/thumb/8/82/0017Pidgeotto.png/600px-0017Pidgeotto.png'),
('Pidgeot', 'The final evolution of Pidgey, a majestic bird with impressive wingspan.', 'https://archives.bulbagarden.net/media/upload/thumb/7/73/0018Pidgeot.png/600px-0018Pidgeot.png'),
('Rattata', 'A normal-type Pokémon known for its speed and agility.', 'https://archives.bulbagarden.net/media/upload/thumb/a/aa/0019Rattata.png/600px-0019Rattata.png'),
('Raticate', 'The evolved form of Rattata, a fast and aggressive rodent Pokémon.', 'https://archives.bulbagarden.net/media/upload/thumb/2/2c/0020Raticate.png/600px-0020Raticate.png'),
('Spearow', 'A normal/flying-type Pokémon with a sharp beak for hunting.', 'https://archives.bulbagarden.net/media/upload/thumb/2/2d/0021Spearow.png/600px-0021Spearow.png'),
('Fearow', 'The evolved form of Spearow, a large bird with powerful beak attacks.', 'https://archives.bulbagarden.net/media/upload/thumb/9/92/0022Fearow.png/600px-0022Fearow.png'),
('Ekans', 'A poison-type Pokémon with a serpentine appearance.', 'https://archives.bulbagarden.net/media/upload/thumb/d/d2/0023Ekans.png/600px-0023Ekans.png'),
('Arbok', 'The evolved form of Ekans, a large cobra Pokémon with a hood.', 'https://archives.bulbagarden.net/media/upload/thumb/5/51/0024Arbok.png/600px-0024Arbok.png'),
('Pikachu', 'An electric-type Pokémon with yellow fur.', 'https://archives.bulbagarden.net/media/upload/thumb/4/4a/0025Pikachu.png/600px-0025Pikachu.png'),
('Raichu', 'The evolved form of Pikachu, an electric Pokémon with enhanced power.', 'https://archives.bulbagarden.net/media/upload/thumb/b/b0/0026Raichu.png/600px-0026Raichu.png');
('Sandshrew', 'A ground-type Pokémon with tough sand-colored skin.', 'https://archives.bulbagarden.net/media/upload/thumb/e/e9/0027Sandshrew.png/600px-0027Sandshrew.png');
UPDATE pokemon SET pkmn_type_id = 1 WHERE id IN (1, 2, 3);