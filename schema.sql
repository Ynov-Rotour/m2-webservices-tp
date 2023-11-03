CREATE TABLE person (
 id    	integer NOT NULL AUTO_INCREMENT PRIMARY KEY,
 lastname   	VARCHAR( 20 ) NOT NULL ,
 firstname	VARCHAR( 40 )
);

INSERT INTO person (lastname, firstname)
VALUES ('Monkey D', 'Luffy'), ('Hancock', 'Boa'), ('Mihawk', 'Dracule'), ('Figarland', 'Shanks');



CREATE TABLE author
(
    id        integer     NOT NULL AUTO_INCREMENT,
    lastname  VARCHAR(20) NOT NULL,
    firstname VARCHAR(20),
    phone     VARCHAR(10) NOT NULL,
    email     VARCHAR(60),
    PRIMARY KEY (id)
);

CREATE TABLE cover
(
    id          integer     NOT NULL AUTO_INCREMENT,
    name        VARCHAR(50) NOT NULL,
    description TEXT        NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE genre
(
    id   integer     NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE book
(
    id        integer     NOT NULL AUTO_INCREMENT,
    title     VARCHAR(50) NOT NULL,
    nb_pages  INT         NOT NULL,
    category  VARCHAR(20),
    id_author INT,
    id_cover  INT,
    PRIMARY KEY (id),
    CONSTRAINT fk_id_author
        FOREIGN KEY (id_author)
            REFERENCES author (id)
            ON DELETE SET NULL,
    CONSTRAINT fk_id_cover
        FOREIGN KEY (id_cover)
            REFERENCES cover (id)
);

CREATE TABLE book_genre
(
    id_book  INT,
    id_genre INT,
    CONSTRAINT fk_id_book
        FOREIGN KEY (id_book)
            REFERENCES book (id),
    CONSTRAINT fk_id_genre
        FOREIGN KEY (id_genre)
            REFERENCES genre (id)
);


INSERT INTO author (firstname, lastname, phone, email)
VALUES ('Bruce', 'Eckel', '0605040302', 'thinking@me.net'),
       ('Antonio', 'Goncalves', '0102030405', null),
       ('Petter', 'Haggar', '0655443322', 'petharg@hotmail.com'),
       ('Claude', 'Delannoy', '0677889900', 'claude@delanooy.com');

INSERT INTO cover (name, description)
VALUES ('Couverture 1', '...'),
       ('Couverture 2', '...'),
       ('Couverture 3', '...'),
       ('Couverture 4', '...'),
       ('Couverture 5', '...'),
       ('Couverture 6', '...'),
       ('Couverture 7', '...'),
       ('Couverture 8', '...');

INSERT INTO genre (name)
VALUES ('SCIENCE-FICTION'),
       ('FANTASTIQUE'),
       ('APPRENTISSAGE'),
       ('JAVA'),
       ('C');

INSERT INTO book (title, nb_pages, category, id_author, id_cover)
VALUES ('Thinking in Java', 320, 'java', 1, 1),
       ('Thinking in C++', 640, 'cpp', 1, 2),
       ('Les cahiers du programmeur Java EE', '240', 'java', 2, 3),
       ('Beginning Java EE 7', 120, 'javaee', 2, 4),
       ('Mieux programmer en Java', 540, 'java', 3, 5),
       ('Exercices en Java', 184, 'java', 4, 6),
       ('Initiation à la programmation', 350, 'algo', 4, 7),
       ('C++ Guide complet', 842, 'cpp', 4, 8);

INSERT INTO book_genre (id_book, id_genre)
VALUES (1, 3),
       (1, 4),
       (2, 3),
       (2, 5),
       (3, 3),
       (3, 4),
       (4, 3),
       (4, 4),
       (5, 3),
       (5, 4),
       (6, 3),
       (6, 4),
       (7, 3),
       (7, 4);