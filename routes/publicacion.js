const {Router} = require('express');
const {publicacionController} = require('../controllers/index')
const router = Router();


router.get('/', publicacionController.getAll); 
router.get('/:publicacionId', publicacionController.get);
router.post('/',publicacionController.post);
router.put('/:publicacionId',publicacionController.put);
router.delete('/:publicacionId',publicacionController.delete);

module.exports = router;