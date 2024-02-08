const AbstractSeeder = require("./AbstractSeeder");

class UserSeeder extends AbstractSeeder {
  constructor() {
    super({ table: "user", truncate: true });
  }

  run() {
    for (let i = 0; i < 10; i += 1) {
      const fakeUser = {
        email: this.faker.internet.email(),
        password: this.faker.internet.password(),
      };

      this.save(fakeUser, `user_${i}`); // `user_${i}` = insert into user(email, password) values (?, ?)
    }
  }
}

module.exports = UserSeeder;
