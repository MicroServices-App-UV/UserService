CREATE TABLE Persona (
    id_persona SERIAL PRIMARY KEY,
    tipo VARCHAR(15) NOT NULL,
    cedula INT UNIQUE,
    nit VARCHAR(15) UNIQUE,
    direccion VARCHAR(100),
    nombre VARCHAR(50),
    apellido VARCHAR(50),
    telefono VARCHAR(14) UNIQUE,
    email VARCHAR(100) UNIQUE,
    password VARCHAR(60) CHECK (length(password) > 6)
);

CREATE TABLE Restaurante (
    id_restaurante SERIAL PRIMARY KEY,
    id_persona INT UNIQUE,
    CONSTRAINT fk_id_persona
        FOREIGN KEY (id_persona)
        REFERENCES Persona(id_persona),
    descripcion VARCHAR(500)
);

CREATE TABLE Usuario_app (
    id_telefono VARCHAR(14) PRIMARY KEY,
    id_persona INT UNIQUE,
    CONSTRAINT fk_id_persona
        FOREIGN KEY (id_persona)
        REFERENCES Persona(id_persona),
);

CREATE TABLE Administrador (
    id_admin SERIAL PRIMARY KEY,
    id_persona INT UNIQUE,
    CONSTRAINT fk_id_persona
        FOREIGN KEY (id_persona)
        REFERENCES Persona(id_persona)
);


INSERT INTO Persona (tipo, cedula, direccion, nombre, apellido, telefono, email, password) 
VALUES ('Usuario', 1005965561, 'cra16#15-20', 'Santiago', 'Trujillo', '3154148727', 'usuario@example.com', '12345678');
INSERT INTO Usuario_app (id_telefono, id_persona)
VALUES ('3154148727', (SELECT id_persona FROM Persona WHERE cedula = 1005965561));


INSERT INTO Persona (tipo, nit, direccion, nombre, apellido, telefono, correo, password)
VALUES ('Restaurante', '900123456789', 'Av. Principal #123', 'Restaurante XYZ', 'S.A.', '5551234567', 'restaurante@example.com', 'password123');
INSERT INTO Restaurante (id_persona, descripcion)
VALUES ((SELECT id_persona FROM Persona WHERE nit = '900123456789'), 'Restaurante de comida internacional');


INSERT INTO Persona (tipo, cedula, direccion, nombre, apellido, telefono, correo, password)
VALUES ('Administrador', 3009876543, 'Calle Principal #456', 'Admin', 'Master', '7779876543', 'admin@example.com', 'adminpassword');
INSERT INTO Administrador (id_persona)
VALUES ((SELECT id_persona FROM Persona WHERE cedula = 3009876543));
