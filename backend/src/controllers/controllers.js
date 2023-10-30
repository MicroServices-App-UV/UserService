const pool = require('../connection_db')

const getUsuario = async (req, res, next) => {
    const { id_usuario } = req.params; 

    try {
        const sql = `SELECT * FROM Persona NATURAL JOIN Usuario_app AS u WHERE u.id_usuario = '${id_usuario}'`;
        const result = await pool.query(sql);

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "Usuario no encontrado",
            });
        }

        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};

const updateUsuario = async (req, res, next) => {
    const { id_usuario } = req.params;
    const { first_name, last_name, username, image, email } = req.body;

    try {
        const sql = ` UPDATE Persona SET first_name = $1, last_name = $2, username = $3, image = $4, email = $5
            WHERE id_persona = (
                SELECT id_persona FROM Usuario_app WHERE id_usuario = $6
            );
        `;
        await pool.query(sql, [first_name, last_name, username, image, email, id_usuario]);

        res.json({ message: "Datos de usuario actualizados exitosamente" });
    } catch (error) {
        next(error);
    }
};

const addUser = async (req, res , next) => {
    const { id_usuario, first_name, last_name, username, image, email } = req.body
    try {
        let sql = `INSERT INTO Persona VALUES (${id_usuario}, '${first_name}', '${last_name}', '${username}', '${image}', '${email}'); INSERT INTO Usuario(id_usuario) VALUES (${id_usuario});`
        const result = await pool.query(sql)
        console.log(result)

        res.json({ message: 'success' })
    } catch (error) {
        next(error)
    }
}



module.exports = {
    getUsuario,
    updateUsuario,
    addUser
}

