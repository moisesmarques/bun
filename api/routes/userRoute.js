const express = require('express');
const { insertTasks, getTasks } = require('../controllers/userController');

const router = express.Router();

router.route('/insert-tasks').post(insertTasks);
router.route('/get-tasks').get(getTasks);

module.exports = router;