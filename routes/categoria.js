const {Router} = require('express');
const router = Router();

router.get('/');
router.get('/:categoriaId');
router.post('/');
router.put('/:categoriaId');
router.delete('/:categoriaId');

module.exports = router;