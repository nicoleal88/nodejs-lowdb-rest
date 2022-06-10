import {v4 as uuid} from 'uuid'
import { getConnection } from '../database.js'

export const getTasks = (req, res) => {
    res.send('Sending tasks')
}

export const createTask = async (req, res) => {
    const newTask = {
        id: uuid(),
        name: req.body.name ? req.body.name : "",
        description: req.body.description,

    }
    try {
        const db = getConnection()
        db.data.tasks.push(newTask)
        await db.write()

        res.json(newTask)
    } catch (error) {
        return res.status(500).send({message: error.message})
    }
}

export const getTask = (req, res) => {
    res.send('Sending task by id')
}

export const updateTask = (req, res) => {
    res.send('Updating task')
}

export const deleteTask = (req, res) => {
    res.send('Deleting task')
}

export const count = (req, res) => {
    res.send('Counting tasks')
}