const AbstractSeeder = require("./AbstractSeeder");

class ItemSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "item", truncate: true });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeItem = { title: this.faker.lorem.word() };

      this.save(fakeItem);
    }
  }
}

module.exports = ItemSeeder;
