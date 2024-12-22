const express = require('express');
const router = express.Router();

const { getTaskById, getTasks, setTask, deleteTask }  = require('../controllers/taskController')

router.get("/", getTasks);
router.get('/:id', getTaskById);
router.post('/add', setTask)
router.delete('/delete/:id', deleteTask )



module.exports = router;
