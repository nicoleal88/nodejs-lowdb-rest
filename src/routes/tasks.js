import { Router } from 'express'
import { getTasks, count, getTask, createTask, updateTask, deleteTask } from '../controllers/task.controller.js';

const router = Router()

router.get('/tasks', getTasks)
router.get('/tasks/count', count)
router.get('/tasks/:id', getTask)
router.post('/tasks', createTask)
router.put('/tasks/:id', updateTask)
router.delete('/tasks/:id', deleteTask)

export default router;