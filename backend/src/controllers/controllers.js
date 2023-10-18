const pool = require('../connection_db')

const getPersonaInfo = async (req, res, next) => {
    try {
        const { id } = req.params;
        let sql = `
            SELECT p.id_persona, p.tipo, p.cedula, p.nit, p.direccion, p.nombre, p.apellido, p.telefono, p.email,
                r.id_restaurante, u.id_telefono, a.id_admin
            FROM Persona AS p
            LEFT JOIN Restaurante AS r ON p.id_persona = r.id_persona
            LEFT JOIN Usuario_app AS u ON p.id_persona = u.id_persona
            LEFT JOIN Administrador AS a ON p.id_persona = a.id_persona
            WHERE p.id_persona = ${id}
        `;
        const result = await pool.query(sql);

        if (result.rows.length === 0) {
            return res.status(404).json({
                message: "Persona no encontrada"
            });
        }

        res.json(result.rows[0]);
    } catch (error) {
        next(error);
    }
};



module.exports = {
    getPersonaInfo
}

