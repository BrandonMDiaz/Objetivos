const {Router} = require('express');
const {metaController} = require('../controllers/index')
const router = Router();

/**
 * Returns all metas
 */
router.get('/', metaController.getAll); 
/**
 * returns all actividades of a meta
 */
router.get('/:metaId/actividades/', metaController.get);
/**
 * returns one meta
 */
router.get('/:metaId', metaController.get);
/**
 * post a meta
 */
router.post('/', metaController.post);
/**
 * Edit a meta
 */
router.put('/:metaId',metaController.put);
/**
 * delete a meta
 */
router.delete('/:metaId',metaController.delete);

module.exports = router;