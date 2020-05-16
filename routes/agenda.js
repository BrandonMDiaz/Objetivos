const {Router} = require('express');
const {agendaController} = require('../controllers/index');
const router = Router();

router.get('/', agendaController.getAll);
router.get('/:agendaId', agendaController.get);
router.post('/', agendaController.post);
router.put('/:agendaId', agendaController.put);
router.delete('/:agendaId', agendaController.delete);

module.exports = router;