const {Router} = require('express');
const router = Router();

/**
 * Returns all actividades
 */
router.get('/'); 
/**
 * returns one meta
 */
router.get('/:actividadId');
/**
 * post a meta
 */
router.post('/');
/**
 * Edit a meta
 */
router.put('/:actividadId');
/**
 * delete a meta
 */
router.delete('/:actividadId');

module.exports = router;