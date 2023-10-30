const { Router } = require('express');
const {
    getUsuario,
    updateUsuario,
    addUser
} = require('../controllers/controllers.js')
const { userInfo } = require("../controllers/graphqlService.js");


const router = Router();

router.get('/usuario/:id_usuario', getUsuario);
router.put('/usuario/:id_usuario', updateUsuario);
router.post('/adduser', addUser);
router.get('/iduser/:id_usuario', userInfo);

module.exports = router
