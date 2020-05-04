const {Router} = require('express');
const router = Router();

/**
 * Returns all metas
 */
router.get('/'); 
/**
 * returns all actividades of a meta
 */
router.get('/:metaId/actividades/');
/**
 * returns one meta
 */
router.get('/:metaId');
/**
 * post a meta
 */
router.post('/');
/**
 * Edit a meta
 */
router.put('/:metaId');
/**
 * delete a meta
 */
router.delete('/:metaId');

module.exports = router;