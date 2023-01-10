//const http = require('http')  padrão commonJS =>  require
import http from 'node:http'   //EsModule => import/export

const server = http.createServer((req, res) => {
    return res.end('Hello World')
})

server.listen(3333)


