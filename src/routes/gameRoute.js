const express = require('express')

const router = express.Router()

const controller = require('../controllers/gameController')

const cors = require('cors')

// @route PUT games
// @desc Atualiza todas as informações do game por ID
// @access Public 
// @endpoint http://localhost:porta/jogos/:id

router.put('/jogos/:id', cors(), controller.updatePut)


// @route Patch games
// @desc Atualiza parte das informações do game por ID
// @access Public 
// @endpoint http://localhost:porta/jogos/:id

router.patch('/jogos/:id', cors(), controller.updatePatch)

module.exports = router