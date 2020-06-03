const {Router} = require('express');
const {loginController} = require('../controllers/index')
const {registerController} = require('../controllers/index')
const router = Router();


router.post('/login', loginController.log); 

// router.post('/register',registerController.register);


module.exports = router;