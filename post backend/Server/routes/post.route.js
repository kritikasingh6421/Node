const express = require("express");
const router = express.Router();
const controller = require('../controllers/post.controller');

router.get('/',controller.findAll);
router.get('/:id',controller.find);
router.post('/',controller.create);
router.put('/:id',controller.update);
router.delete('/:id',controller.delete);

module.exports = router; 