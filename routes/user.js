const {Router} = require('express');
const router = Router();

//friends route 
router.get('/:userId/friends');
//objetivos route
router.get('/:userId/objetivos/');
//publicaciones
router.get('/:userId/publicaciones');
router.get('/:userId/friends/publicaciones');
//agenda
router.get('/:userId/agenda');
router.get('/:userId/agenda/:agendaId');


//users
router.get('/:userId');
router.get('/');
router.post('/');
router.put('/:userId');
router.delete('/:userId');

module.exports = router;