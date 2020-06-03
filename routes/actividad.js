const {Router} = require('express');
const {actividadController} = require('../controllers/index')
const Auth = require('../middlewares/autenticacion')


const router = Router();

/**
 * Returns all actividades
 */
router.get('/', [Auth.VerificaToken], actividadController.getAll); 
/**
 * returns one meta
 */
router.get('/:actividadId', [Auth.VerificaToken], actividadController.get);
/**
 * post a meta
 */
router.post('/',[Auth.VerificaToken], actividadController.post);
/**
 * Edit a meta
 */
router.put('/:actividadId',[Auth.VerificaToken], actividadController.put);
/**
 * delete a meta
 */
router.delete('/:actividadId',[Auth.VerificaToken], actividadController.delete);

module.exports = router;