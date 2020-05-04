const {Router} = require('express');
const router = Router();

router.get('/');
router.get('/:agendaId');
router.post('/');
router.put('/:agendaId');
router.delete('/:agendaId');

module.exports = router;