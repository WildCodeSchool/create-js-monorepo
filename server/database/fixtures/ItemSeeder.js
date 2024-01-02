const AbstractSeeder = require("./AbstractSeeder");
const UserSeeder = require("./UserSeeder");

class ItemSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "item", truncate: true, dependencies: [UserSeeder] });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeItem = {
        title: this.faker.lorem.word(),
        user_id: this.getRef(`user_${i}`).insertId,
      };

      this.save(fakeItem);
    }
  }
}

module.exports = ItemSeeder;
