import { Router } from 'express'
import { getTasks, count, getTask, createTask, updateTask, deleteTask } from '../controllers/task.controller.js';

const router = Router()

router.get('/tasks', getTasks)
router.get('/tasks/count', count)
router.get('/task/:id', getTask)
router.post('/tasks', createTask)
router.put('/task/:id', updateTask)
router.delete('/task/:id', deleteTask)

export default router;