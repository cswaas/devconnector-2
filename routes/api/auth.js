const express = require('express');
const router = express.Router();

// @route   GET api/auth
// @desc    Tests route
// @access  Public
router.get('/', (req, res) => res.json('Auth route'));

module.exports = router;
