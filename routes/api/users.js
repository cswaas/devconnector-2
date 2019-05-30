const express = require('express');
const router = express.Router();

// @route   GET api/users
// @desc    Tests route
// @access  Public
router.get('/', (req, res) => res.json('Users route'));

module.exports = router;
