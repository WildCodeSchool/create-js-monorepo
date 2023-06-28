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
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`User`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`User` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Email` VARCHAR(255) NOT NULL,
  `Hashed_password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB;

INSERT INTO User (Email, Hashed_password)
VALUES ("yann.richard9@gmail.com", "$argon2id$v=19$m=16,t=2,p=1$cXFnN2s1ZHU0aTAwMDAwMA$XFP3Vrp4/huxiy9p4p2EAw"),
("user.random@gmail.com", "$argon2id$v=19$m=16,t=2,p=1$MTIzNDU2Nzg$1VS2Xgo4ph6WkoRshjCsJg");
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

INSERT INTO Phone (Brand, Model, RAM, Storage, Status, User_Id)
VALUES 
    ( 'Samsung', 'Galaxy S20', 8, 128, 'Comme neuf', 1),
    ( 'Samsung', 'Galaxy S10', 4, 64, 'Bon état', 2),
    ( 'Samsung', 'Galaxy A52', 6, 128, 'Passable', 2),
    ( 'Samsung', 'Galaxy Note 10', 8, 256, 'Comme neuf', 2),
    ( 'Samsung', 'Galaxy S21', 12, 256, 'Mauvais', 2),
    ( 'iPhone', 'iPhone 12', 4, 64, 'Comme neuf', 2),
    ( 'iPhone', 'iPhone 11 Pro', 6, 128, 'Bon état', 1),
    ( 'iPhone', 'iPhone XR', 3, 64, 'Passable', 2),
    ( 'iPhone', 'iPhone SE', 4, 128, 'Mauvais', 1),
    ( 'iPhone', 'iPhone 13', 8, 256, 'Comme neuf', 2),
    ( 'Huawei', 'P40 Pro', 8, 256, 'Comme neuf', 2),
    ( 'Huawei', 'Mate 30 Pro', 8, 128, 'Bon état', 1),
    ( 'Huawei', 'P30 Lite', 4, 64, 'Passable', 2),
    ( 'Huawei', 'Nova 7i', 6, 128, 'Mauvais', 2),
    ( 'Huawei', 'P20 Pro', 6, 256, 'Comme neuf', 2),
    ( 'Xiaomi', 'Mi 11', 8, 256, 'Comme neuf', 1),
    ( 'Xiaomi', 'Redmi Note 9', 4, 128, 'Bon état', 2),
    ( 'Xiaomi', 'Poco X3', 6, 64, 'Passable', 1),
    ( 'Xiaomi', 'Mi 10T Pro', 8, 128, 'Mauvais', 2),
    ( 'Xiaomi', 'Redmi 9', 4, 64, 'Comme neuf', 2);

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
