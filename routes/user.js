const {Router} = require('express');
const {usuarioController} = require('../controllers/index')
const {agendaController} = require('../controllers/index')
const {amigoController} = require('../controllers/index')
const {objetivoController} = require('../controllers/index')
const {publicacionController} = require('../controllers/index')


const router = Router();

//friends route 
router.get('/:userId/friends',amigoController.getAll);
//objetivos route
router.get('/:userId/objetivos/',objetivoController.getAll);
//publicaciones
router.get('/:userId/publicaciones', publicacionController.get);
router.get('/:userId/friends/publicaciones');
//agenda
router.get('/:userId/agenda',agendaController.getAll);
router.get('/:userId/agenda/:agendaId',agendaController.get);


//users
router.get('/:userId',usuarioController.get);
router.get('/',usuarioController.getAll);
router.post('/', usuarioController.post);
router.put('/:userId',usuarioController.put);
router.delete('/:userId', usuarioController.delete);

module.exports = router;