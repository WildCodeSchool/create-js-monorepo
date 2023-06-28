DROP TABLE IF EXISTS `smartphone`;
DROP TABLE IF EXISTS `system`;

CREATE TABLE IF NOT EXISTS `system` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `system` VARCHAR(100) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `smartphone` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `brand` VARCHAR(255) NOT NULL,
  `model` VARCHAR(255) NOT NULL,
  `system_id` INT NOT NULL,
  `version_system` VARCHAR(255) NOT NULL,
  `ram` VARCHAR(10),
  `memory` VARCHAR(10),
  `screen_size` VARCHAR(20) NOT NULL,
  `network` VARCHAR(10) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_smartphone_system` FOREIGN KEY (`system_id`) REFERENCES `system`(`id`)
);

INSERT INTO `system` (`system`)
VALUES
    ('iOS'),
    ('Android');

INSERT INTO `smartphone` (`brand`, `model`, `system_id`, `version_system`, `ram`, `memory`, `screen_size`, `network`) VALUES
    ('Apple', 'iPhone 12', 1, '15.0', '4GB', '64GB', '6.1 pouces', '4G'),
    ('Samsung', 'Galaxy S21', 2, '12.0', '8GB', '128GB', '6.2 pouces', '5G'),
    ('Google', 'Pixel 5', 2, '12.0', '8GB', '128GB', '6.0 pouces', '5G'),
    ('OnePlus', '9 Pro', 2, '11.0', '12GB', '256GB', '6.7 pouces', '5G'),
    ('Xiaomi', 'Mi 11', 2, '12.5', '8GB', '128GB', '6.81 pouces', '5G'),
    ('Apple', 'iPhone SE', 1, '15.0', '3GB', '64GB', '4.7 pouces', '4G'),
    ('Samsung', 'Galaxy A52', 2, '12.0', '6GB', '128GB', '6.5 pouces', '4G'),
    ('Google', 'Pixel 4a', 2, '12.0', '6GB', '128GB', '5.81 pouces', '4G'),
    ('OnePlus', '8 Pro', 2, '11.0', '8GB', '128GB', '6.78 pouces', '5G'),
    ('Xiaomi', 'Redmi Note 10', 2, '11.0', '4GB', '64GB', '6.43 pouces', '4G'),
    ('Apple', 'iPhone 13', 1, '15.0', '6GB', '128GB', '6.1 pouces', '5G'),
    ('Samsung', 'Galaxy S20', 2, '11.0', '12GB', '128GB', '6.2 pouces', '5G'),
    ('Google', 'Pixel 6', 2, '13.0', '8GB', '256GB', '6.4 pouces', '5G'),
    ('OnePlus', '9T', 2, '11.0', '12GB', '256GB', '6.55 pouces', '5G'),
    ('Xiaomi', 'Mi 10', 2, '12.0', '8GB', '256GB', '6.67 pouces', '5G'),
    ('Apple', 'iPhone XR', 1, '15.0', '3GB', '64GB', '6.1 pouces', '4G'),
    ('Samsung', 'Galaxy A71', 2, '12.0', '8GB', '128GB', '6.7 pouces', '4G'),
    ('Google', 'Pixel 5a', 2, '13.0', '6GB', '128GB', '6.34 pouces', '5G'),
    ('OnePlus', '9', 2, '12.0', '8GB', '128GB', '6.55 pouces', '5G'),
    ('Xiaomi', 'Redmi Note 9', 2, '10.0', '4GB', '128GB', '6.53 pouces', '4G');
