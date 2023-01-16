//const http = require('http')  padrão commonJS =>  require
import http from 'node:http' //EsModule => import/export
import { randomUUID } from 'node:crypto'
import { Database } from './database.js'
import { json } from './middlewares/json.js'

//HTTP status code

const database = new Database()

const server = http.createServer(async (req, res) => {
    const { method, url } = req

    await json(req, res)

    if (method === 'GET' && url === '/users') {
        const users = database.select('users')

        return res.end(JSON.stringify(users)) //early return
    }

    if (method === 'POST' && url === '/users') {
        const {
            name,
            email
        } = req.body

        const user = {
            id: randomUUID(),
            name,
            email
        }

        database.insert('users', user)

        return res.writeHead(201).end()
    }

    return res.writeHead(404).end()
})

server.listen(3333)