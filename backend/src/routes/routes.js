const { Router } = require('express');
const {
    getPersonaInfo
} = require('../controllers/controllers.js')


const router = Router();

router.get('/editarPerfil', getPersonaInfo)

module.exports = router
