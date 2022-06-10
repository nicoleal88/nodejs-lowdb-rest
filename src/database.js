import {Low, JSONFile} from 'lowdb'
import {join, dirname} from 'path'
import {fileURLToPath} from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url)) // Ruta de trabajo

let db; // Database

export async function createConnection () {
    const file = join(__dirname, '../db.json')
    const adapter = new JSONFile(file) // Use JSON file for storage
    db = new Low(adapter)
    await db.read() // Read data from JSON file, this will set db.data content
    // If file.json doesn't exist, db.data will be null
    db.data ||= {tasks: []} // Set default data
    
    await db.write() // Write db.data content to db.json

}

export const getConnection = () => db;