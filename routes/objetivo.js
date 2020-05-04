const {Router} = require('express');
const router = Router();

router.get('/');
router.get('/:objetivoId');
router.post('/');
router.put('/:objetivoId');
router.delete('/:objetivoId');

module.exports = router;