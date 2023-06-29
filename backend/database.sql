-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Table `mydb`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`User` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Email` VARCHAR(255) NOT NULL,
  `Hashed_password` VARCHAR(255) NOT NULL,
  `Admin` BOOLEAN DEFAULT False,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB;

INSERT INTO User (Email, Hashed_password, Admin)
VALUES ("yann.richard9@gmail.com", "$argon2id$v=19$m=16,t=2,p=1$cXFnN2s1ZHU0aTAwMDAwMA$XFP3Vrp4/huxiy9p4p2EAw", false),
("user.random@gmail.com", "$argon2id$v=19$m=16,t=2,p=1$MTIzNDU2Nzg$1VS2Xgo4ph6WkoRshjCsJg", false),
("admin.name@toto.com", "$argon2id$v=19$m=16,t=2,p=1$MTIzNDU2Nzg$YZOi4iOIKvdXpwWfSqQj9A", true);
-- -----------------------------------------------------
-- Table `mydb`.`Phone`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`Phone` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Brand` VARCHAR(45) NOT NULL,
  `Model` VARCHAR(45) NOT NULL,
  `RAM` INT NOT NULL,
  `Storage` INT NOT NULL,
  `Status` VARCHAR(45) NOT NULL,
  `Value_M` INT NULL,
  `Value_S` VARCHAR(45) NULL,
  `Weigthing` DECIMAL(3,2) NULL,
  `Total_value` INT NULL,
  `User_Id` INT NOT NULL,
  PRIMARY KEY (`Id`),
  INDEX `fk_Phone_User_idx` (`User_Id` ASC) VISIBLE,
  CONSTRAINT `fk_Phone_User`
    FOREIGN KEY (`User_Id`)
    REFERENCES `mydb`.`User` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO Phone (Brand, Model, RAM, Storage, Status, Total_value, User_Id)
VALUES 
    ( 'Samsung', 'Galaxy S20', 8, 128, 'Réparable', 80, 1),
    ( 'Samsung', 'Galaxy S10', 4, 64, 'Bloqué', 8, 2),
    ( 'Samsung', 'Galaxy A52', 6, 128, 'Reconditionnable', 45, 2),
    ( 'Samsung', 'Galaxy Note 10', 8, 256, 'Réparable', 90, 2),
    ( 'Samsung', 'Galaxy S21', 12, 256, 'Reconditionné', 70, 2),
    ( 'Apple', 'iPhone 12', 4, 64, 'Réparable', 77, 2),
    ( 'Apple', 'iPhone 11 Pro', 6, 128, 'Bloqué', 15, 1),
    ( 'Apple', 'iPhone XR', 3, 64, 'Reconditionnable', 27, 2),
    ( 'Apple', 'iPhone SE', 4, 128, 'Reconditionné', 55, 1),
    ( 'Apple', 'iPhone 13', 8, 256, 'Réparable', 90, 2),
    ( 'Huawei', 'P40 Pro', 8, 256, 'Réparable', 90, 2),
    ( 'Huawei', 'Mate 30 Pro', 8, 128, 'Bloqué', 21, 1),
    ( 'Huawei', 'P30 Lite', 4, 64, 'Reconditionnable', 30, 2),
    ( 'Huawei', 'Nova 7i', 6, 128, 'Reconditionné', 60, 2),
    ( 'Huawei', 'P20 Pro', 6, 256, 'Réparable', 90, 2),
    ( 'Xiaomi', 'Mi 11', 8, 256, 'Réparable', 94, 1),
    ( 'Xiaomi', 'Redmi Note 9', 4, 128, 'Bloqué', 13, 2),
    ( 'Xiaomi', 'Poco X3', 6, 64, 'Reconditionnable', 40, 1),
    ( 'Xiaomi', 'Mi 10T Pro', 8, 128, 'Reconditionné', 65, 2),
    ( 'Xiaomi', 'Redmi 9', 4, 64, 'Réparable', 76, 2);

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;