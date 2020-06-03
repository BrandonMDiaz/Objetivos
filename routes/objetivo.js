const {Router} = require('express');
const {objetivoController} = require('../controllers/index');
const Auth = require('../middlewares/autenticacion');

const router = Router();

router.get('/', [Auth.VerificaToken], objetivoController.getAll);
router.get('/:objetivoId', [Auth.VerificaToken],objetivoController.get);
router.post('/', [Auth.VerificaToken],objetivoController.post);
router.put('/:objetivoId', [Auth.VerificaToken],objetivoController.put);
router.delete('/:objetivoId', [Auth.VerificaToken],objetivoController.delete);

module.exports = router;