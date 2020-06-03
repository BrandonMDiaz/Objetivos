const {Router} = require('express');
const {amigoController} = require('../controllers/index')

const router = Router();


router.post('/', amigoController.post);
router.delete('/:friendId', amigoController.delete);

module.exports = router;