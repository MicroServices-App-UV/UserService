CREATE TABLE Persona (
    id_persona SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    username VARCHAR(20) NOT NULL UNIQUE,
    image VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(60) CHECK (length(password) > 6)
);

CREATE TABLE Usuario_app (
    id_usuario SERIAL PRIMARY KEY,
    id_persona INT,
    CONSTRAINT fk_id_persona
        FOREIGN KEY (id_persona)
        REFERENCES Persona(id_persona)
);

CREATE TABLE Administrador (
    id_admin SERIAL PRIMARY KEY,
    id_persona INT,
    CONSTRAINT fk_id_persona
        FOREIGN KEY (id_persona)
        REFERENCES Persona(id_persona)
);


INSERT INTO Persona (first_name, last_name, username, image, email, password)
VALUES ('Santiago', 'Trujillo', 'ifis','hola', 'usuario@example.com', '12345678');
INSERT INTO Usuario_app (id_persona)
VALUES ((SELECT id_persona FROM Persona WHERE username = 'ifis'));


INSERT INTO Persona (first_name, last_name, username, image, email, password)
VALUES ('Santiago', 'Ospitia', 'saos','holas', 'usuarios@example.com', '12345678');
INSERT INTO Administrador (id_persona)
VALUES ((SELECT id_persona FROM Persona WHERE username = 'saos'));
