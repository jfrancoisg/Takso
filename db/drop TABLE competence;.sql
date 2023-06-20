DROP TABLE competence;

DROP TABLE type_competence;

CREATE TABLE
    IF NOT EXISTS competence (
        id integer PRIMARY KEY AUTOINCREMENT NOT NULL,
        nom varchar(50) NOT NULL UNIQUE,
        id_type_competence integer not null
    );

CREATE TABLE
    IF NOT EXISTS type_competence (
        id integer PRIMARY KEY AUTOINCREMENT NOT NULL,
        nom varchar(50) NOT NULL UNIQUE
    );

CREATE TABLE
    IF NOT EXISTS connaisance (
        id integer PRIMARY KEY AUTOINCREMENT NOT NULL,
        nom varchar(50) NOT NULL UNIQUE,
        parent_id int(11) DEFAULT NULL
    );

INSERT INTO type_competence (nom) VALUES ('Front-end');

INSERT INTO type_competence (nom) VALUES ('Back-end');

INSERT INTO
    competence (nom, id_type_competence)
VALUES ('Maquette une application', 1);

INSERT INTO
    competence (nom, id_type_competence)
VALUES (
        'Réaliser une interface utilisateur web static et adaptable',
        1
    );

INSERT INTO
    competence (nom, id_type_competence)
VALUES (
        'Développer une interface utilisateur web dynamique',
        1
    );

INSERT INTO
    competence (nom, id_type_competence)
VALUES (
        'Réaliser une interface utilisateur avec une solution de gestion de contenu ou e-commerce',
        1
    );

INSERT INTO
    competence (nom, id_type_competence)
VALUES (
        'Créer une base de données',
        2
    );

INSERT INTO
    competence (nom, id_type_competence)
VALUES (
        'Développer les composants d''accès aux données',
        2
    );

INSERT INTO
    competence (nom, id_type_competence)
VALUES (
        'Développer la partie back-end d''une application web et web mobile',
        2
    );

INSERT INTO
    competence (nom, id_type_competence)
VALUES (
        'Elaborer et mettre en oeuvre des composants dans une application de gestion de contenu ou e-commerce',
        2
    );