create table item (
  id integer primary key autoincrement not null,
  title varchar(255) not null
);

insert into item (title) values ('Stuff'), ('Doodads');
