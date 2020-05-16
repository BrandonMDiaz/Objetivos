const {Router} = require('express');

const user = require('./user');
const objetivo = require('./objetivo');
const meta = require('./meta');
const actividad = require('./actividad');
const agenda = require('./agenda');
const categoria = require('./categoria');
const friend = require('./friend');
const publicacion = require('./publicacion');
const auth = require('./auth');


const router = Router()

router.use('/user', user);
router.use('/auth', auth);
router.use('/publicacion', publicacion);
router.use('/friend', friend);
router.use('/categoria', categoria);
router.use('/agenda', agenda);
router.use('/actividad', actividad);
router.use('/meta', meta);
router.use('/objetivo', objetivo);

module.exports = router;