CREATE DATABASE librerianode;
USE librerianode;

CREATE TABLE libreria(
    id          INT AUTO_INCREMENT PRIMARY KEY,
    titulo      VARCHAR(100) NOT NULL,
    autor       VARCHAR(100) NOT NULL,
    editorial   VARCHAR(80) NOT NULL,
    precio      DECIMAL(7,2) NOT NULL
) ENGINE=INNODB;

INSERT INTO libreria (titulo, autor, editorial, precio) VALUES
    ('El Señor de los Anillos', 'J.R.R. Tolkien', 'Minotauro', 59.99),
    ('Cien Años de Soledad', 'Gabriel García Márquez', 'Editorial Sudamericana', 45.50);

SELECT * FROM libreria;
