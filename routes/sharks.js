const express = require('express');
const router = express.Router();
const sharkController = require('../controllers/sharks');
const validateShark = require('../middleware/validate');
const { isAuthenticated } = require("../middleware/authenticate");

router.get('/', sharkController.getAll);
router.get('/:id', sharkController.getSingle);
router.post('/', validateShark, sharkController.createShark);
router.put('/:id', validateShark, sharkController.updateShark);
router.delete('/:id', sharkController.deleteShark);

module.exports = router;