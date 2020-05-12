const {Router} = require('express');
const {objetivoController} = require('../controllers/index')
const router = Router();

router.get('/', objetivoController.getAll);
router.get('/:objetivoId', objetivoController.get);
router.post('/', objetivoController.post);
router.put('/:objetivoId', objetivoController.put);
router.delete('/:objetivoId', objetivoController.delete);

module.exports = router;