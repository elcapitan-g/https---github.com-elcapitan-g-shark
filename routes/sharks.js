const express = require('express');
const router = express.Router();
const sharkController = require('../controllers/sharks');
const validateShark = require('../middleware/validateShark');

router.get('/', sharkController.getAllSharks);
router.get('/:id', sharkController.getSharkById);
router.post('/', validateShark, sharkController.createShark);
router.put('/:id', validateShark, sharkController.updateShark);
router.delete('/:id', sharkController.deleteShark);

module.exports = router;