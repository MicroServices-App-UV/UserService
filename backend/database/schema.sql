CREATE TABLE Persona (
    id_persona VARCHAR(100) PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    username VARCHAR(20) NOT NULL UNIQUE,
    image VARCHAR(255),
    email VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE Usuario_app (
    id_usuario VARCHAR(100) PRIMARY KEY,
    id_persona VARCHAR(100),
    CONSTRAINT fk_id_persona
        FOREIGN KEY (id_persona)
        REFERENCES Persona(id_persona)
);

CREATE TABLE Administrador (
    id_admin VARCHAR(100) PRIMARY KEY,
    id_persona VARCHAR(100),
    CONSTRAINT fk_id_persona_admin
        FOREIGN KEY (id_persona)
        REFERENCES Persona(id_persona)
);



INSERT INTO Persona (id_persona, first_name, last_name, username, image, email)
VALUES ('1', 'Santiago', 'Trujillo', 'ifis','hola', 'usuario@example.com');
INSERT INTO Usuario_app (id_usuario, id_persona)
VALUES ('1', (SELECT id_persona FROM Persona WHERE username = 'ifis'));

INSERT INTO Persona (id_persona, first_name, last_name, username, image, email)
VALUES ('2', 'Santiago', 'Ospitia', 'saos','holas', 'usuarios@example.com');
INSERT INTO Administrador (id_admin,id_persona)
VALUES ('2','2');

