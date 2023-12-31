create database sound_hub;
use sound_hub;

CREATE TABLE `level` (
    `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255),
    `flag_deleted` BIT(1)
);
CREATE TABLE `user_app` (
    `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
    `username` VARCHAR(255) UNIQUE NOT NULL,
    `password` VARCHAR(255),
    `image` TEXT,
    `level_id` BIGINT,
    `flag_deleted` BIT(1),
    FOREIGN KEY (`level_id`)
        REFERENCES `level` (`id`)
);

CREATE TABLE `role` (
    `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `flag_deleted` BIT(1)
);

CREATE TABLE `user_app_role` (
    `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
    `user_app_id` BIGINT,
    `role_id` BIGINT,
    `flag_deleted` BIT(1),
    FOREIGN KEY (`user_app_id`)
        REFERENCES `user_app` (`id`),
    FOREIGN KEY (`role_id`)
        REFERENCES `role` (`id`)
);
CREATE TABLE `album` (
    `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255),
    `user_app_id` BIGINT,
    `flag_deleted` BIT(1),
    FOREIGN KEY (`user_app_id`)
        REFERENCES `user_app` (`id`)
);


CREATE TABLE `type` (
    `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255),
    `flag_deleted` BIT(1)
);

CREATE TABLE `singer` (
    `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255),
    `flag_deleted` BIT(1)
);
CREATE TABLE `author` (
    `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255),
    `flag_deleted` BIT(1)
);
CREATE TABLE `quality` (
    `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255),
    `flag_deleted` BIT(1)
);



CREATE TABLE `song` (
    `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
    `name` VARCHAR(255),
    `lyric` LONGTEXT,
    `link` TEXT,
    `release_date` DATE,
    `author_id` BIGINT,
    `user_limit` BIT(1),
    `flag_deleted` BIT(1),
    FOREIGN KEY (`author_id`)
        REFERENCES `author` (`id`)
);

CREATE TABLE `song_quality` (
    `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
    `song_id` BIGINT,
    `quality_id` BIGINT,
    `flag_deleted` BIT(1),
    FOREIGN KEY (`song_id`)
        REFERENCES `song` (`id`),
    FOREIGN KEY (`quality_id`)
        REFERENCES `quality` (`id`)
);


CREATE TABLE `song_type` (
    `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
    `song_id` BIGINT,
    `type_id` BIGINT,
    `flag_deleted` BIT(1),
    FOREIGN KEY (`song_id`)
        REFERENCES `song` (`id`),
    FOREIGN KEY (`type_id`)
        REFERENCES `type` (`id`)
);

CREATE TABLE `song_album` (
    `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
    `song_id` BIGINT,
    `album_id` BIGINT,
    `flag_deleted` BIT(1),
    FOREIGN KEY (`song_id`)
        REFERENCES `song` (`id`),
    FOREIGN KEY (`album_id`)
        REFERENCES `album` (`id`)
);
CREATE TABLE `song_singer` (
    `id` BIGINT PRIMARY KEY AUTO_INCREMENT,
    `song_id` BIGINT,
    `singer_id` BIGINT,
    `flag_deleted` BIT(1),
    FOREIGN KEY (`song_id`)
        REFERENCES `song` (`id`),
    FOREIGN KEY (`singer_id`)
        REFERENCES `singer` (`id`)
);
