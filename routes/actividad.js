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
router.get('/:actividadId', actividadController.get);
/**
 * post a meta
 */
router.post('/', actividadController.post);
/**
 * Edit a meta
 */
router.put('/:actividadId', actividadController.put);
/**
 * delete a meta
 */
router.delete('/:actividadId', actividadController.delete);

module.exports = router;