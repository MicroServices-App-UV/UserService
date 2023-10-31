const { Router } = require('express');
const {
    getUsuario,
    updateUsuario
} = require('../controllers/controllers.js')
const { userInfo } = require("../controllers/graphqlService.js");


const router = Router();

router.get('/iduser/:id_usuario', userInfo);

router.get("/usuario", getUsuario);
router.put('/usuario/:id_usuario', updateUsuario);
//router.get("/getid", getID);

module.exports = router
