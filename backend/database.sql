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
  `Total_value` INT NOT NULL,
  `User_Id` INT NOT NULL,
  PRIMARY KEY (`Id`),
  INDEX `fk_Phone_User_idx` (`User_Id` ASC) VISIBLE,
  CONSTRAINT `fk_Phone_User`
    FOREIGN KEY (`User_Id`)
    REFERENCES `mydb`.`User` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
