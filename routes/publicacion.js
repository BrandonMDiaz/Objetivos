const {Router} = require('express');
const router = Router();


router.get('/'); 
router.get('/:publicacionId');
router.post('/');
router.put('/:publicacionId');
router.delete('/:publicacionId');

module.exports = router;