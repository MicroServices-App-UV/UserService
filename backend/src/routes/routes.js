const { Router } = require('express');
const {
    getUsuario,
    updateUsuario
} = require('../controllers/controllers.js')


const router = Router();

router.get('/usuario/:id_usuario', getUsuario);
router.put('/usuario/:id_usuario', updateUsuario);

module.exports = router
