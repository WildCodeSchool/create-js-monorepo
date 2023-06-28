require("dotenv").config();

// const { fakerFR: faker } = require("@faker-js/faker");
const fs = require("fs");
const mysql = require("mysql2/promise");

const migrate = async () => {
  const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

  const connection = await mysql.createConnection({
    host: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    password: DB_PASSWORD,
    multipleStatements: true,
  });

  await connection.query(`drop database if exists ${DB_NAME}`);
  await connection.query(`create database ${DB_NAME}`);
  await connection.query(`use ${DB_NAME}`);

  const sql = fs.readFileSync("./database.sql", "utf8");

  await connection.query(sql);

  // const generateRandomUsers = (number) => {
  //   for (let i = 0; i < number; i += 1) {
  //     const firstname = faker.person.firstName();
  //     const lastname = faker.person.lastName();
  //     const email = faker.internet
  //       .email({ firstName: firstname, lastName: lastname })
  //       .toLowerCase();
  //     const hashedPassword =
  //       "$argon2id$v=19$m=65536,t=5,p=1$+8QKgBU+Z7zr2EVICuFDOg$74Nu7DWmpa/+VW7543Xm28gd+ATVrhtCV2lAakJ4i+A";
  //     const phoneNumber = faker.phone.number("06-##-##-##-##");
  //     const addressNumber = faker.location.buildingNumber();
  //     const addressStreetname = faker.location.street();
  //     const city = faker.location.city();
  //     const roles = "user";

  //     // requête sql qui remplace les valeurs par celles qui ont été crées ci dessus
  //     const userQuery = `INSERT INTO user (firstname, lastname, email, hashedPassword, phone_number, address_number, address_streetname, city, roles) VALUES ("${firstname}", "${lastname}", "${email}", "${hashedPassword}", "${phoneNumber}", "${addressNumber}", "${addressStreetname}", "${city}", "${roles}")`;
  //     // connection à la bdd avec envoi d'une query
  //     connection.query(userQuery);
  //   }
  // };
  // generateRandomUsers(20);

  connection.end();
};

try {
  migrate();
} catch (err) {
  console.error(err);
}
