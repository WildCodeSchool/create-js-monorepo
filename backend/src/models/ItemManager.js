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
      `insert into ${this.table} (title) values (?)`,
      [pokemon.name]
    );

    // Return the ID of the newly inserted pokemon
    return result.insertId;
  }

  // The Rs of CRUD - Read operations

  async read(id) {
    // Execute the SQL SELECT query to retrieve a specific pokemon by its ID
    const [rows] = await this.database.query(
      `select * from ${this.table} where id = ?`,
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
  // TODO: Implement the update operation to modify an existing pokemon

  // async update(pokemon) {
  //   ...
  // }

  // The D of CRUD - Delete operation
  // TODO: Implement the delete operation to remove an pokemon by its ID

  // async delete(id) {
  //   ...
  // }
}

module.exports = pokemonManager;
