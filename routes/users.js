const {Router} = require('express');
const router = Router();

router.get('/:userId');
router.get('/');
router.post('/');
router.put('/:userId');
router.delete('/:userId');

module.exports = router;