const AbstractManager = require("./AbstractManager");

class pokemonManager extends AbstractManager {
  constructor() {
    // Call the constructor of the parent class (AbstractManager)
    // and pass the table name "pokemon" as configuration
    super({ table: "pokemon" });
  }

  // The C of CRUD - Create operation

  async create(pokemon) {
    // Execute the SQL INSERT query to add a new pokemon to the "pokemon" table
    const [result] = await this.database.query(
      `insert into ${this.table} (name, description, image, type) values (?,?,?,?)`,
      [pokemon.name, pokemon.description, pokemon.image, pokemon.type_id]
    );

    // Return the ID of the newly inserted pokemon
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific pokemon by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} inner join pktype on pktype.id = ${this.table}.type_id where ${this.table}.id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the pokemon
    return rows[0];
  }

  async readAll() {
    // Execute the SQL SELECT query to retrieve all pokemons from the "pokemon" table
    const [rows] = await this.database.query(`select * from ${this.table}`);

    // Return the array of pokemons
    return rows;
  }

  // The U of CRUD - Update operation
  async update(id, putPkmn) {
    // Execute the SQL SELECT query to retrieve a specific pkmns by its ID
    const [result] = await this.database.query(
      `UPDATE ${this.table} set name = ?, description = ?, image = ?, type_id = ? WHERE id = ?`,
      [putPkmn.name, putPkmn.description, putPkmn.image, putPkmn.type_id, id]
    );

    // Return the first row of the result, which represents the item
    return result.affectedRows;
  }

  // The D of CRUD - Delete operation
  async delete(id) {
    const result = await this.database.query(
      `DELETE FROM ${this.table} WHERE id = ?`,
      [id]
    );

    // Return the first row of the result, which represents the pkmn
    return result;
  }
}

module.exports = pokemonManager;
