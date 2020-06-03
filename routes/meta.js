const {Router} = require('express');
const {metaController} = require('../controllers/index');
const Auth = require('../middlewares/autenticacion');

const router = Router();

/**
 * Returns all metas
 */
router.get('/',[Auth.VerificaToken], metaController.getAll); 
/**
 * returns all actividades of a meta
 */
router.get('/:metaId/actividades/', [Auth.VerificaToken],metaController.get);
/**
 * returns one meta
 */
router.get('/:metaId',[Auth.VerificaToken], metaController.get);
/**
 * post a meta
 */
router.post('/', [Auth.VerificaToken],metaController.post);
/**
 * Edit a meta
 */
router.put('/:metaId', [Auth.VerificaToken],metaController.put);
/**
 * delete a meta
 */
router.delete('/:metaId',metaController.delete);

module.exports = router;