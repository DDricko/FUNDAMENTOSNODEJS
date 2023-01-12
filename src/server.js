//const http = require('http')  padrão commonJS =>  require
import http from 'node:http'   //EsModule => import/export

//HTTP status code

const users = []

const server = http.createServer((req, res) => {
    const { method, url } = req

    if(method === 'GET' && url === '/users'){
        return res
            .setHeader('Content-type', 'application/json')
            .end(JSON.stringify(users))   //early return
    }

    if(method === 'POST' && url === '/users'){
        users.push({
            id: 1,
            name: 'Eu',
            email: 'eu.teste@gmil.com'
        })

        return res.writeHead(201).end()
    }

    return res.writeHead(404).end()
})

server.listen(3333)


