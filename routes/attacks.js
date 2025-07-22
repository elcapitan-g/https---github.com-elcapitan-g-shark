const express = require('express');
const router = express.Router();
const attacksController = require('../controllers/attacks');
const validateAttack = require('../middleware/validateAttack');

router.get('/', attacksController.getAll);
router.get('/:id', attacksController.getSingle);
router.post('/', validateAttack, attacksController.createAttack);
router.put('/:id', validateAttack, attacksController.updateAttack);
router.delete('/:id', attacksController.deleteAttack);

module.exports = router;
