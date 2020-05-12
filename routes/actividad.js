const {Router} = require('express');
const {actividadController} = require('../controllers/index')
const router = Router();

/**
 * Returns all actividades
 */
router.get('/', actividadController.getAll); 
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