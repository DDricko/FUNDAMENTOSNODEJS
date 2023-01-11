//const http = require('http')  padrão commonJS =>  require
import http from 'node:http'   //EsModule => import/export

//HTTP
// - Metodo HTTP
// - URL

//GET => Buscar um recurso no back-end
//POST => Criar um recurso no back-end
//PUT => Atualizar um recurso no back-end
//PATCH => Atualizar uma informação especifica de um recurso no back-end
//Delete => Deletar um recurso no back-end

const server = http.createServer((req, res) => {
    const { method, url } = req

    if(method === 'GET' && url === '/users'){
        return res.end('Listagem de usuários')   //early return
    }

    if(method === 'POST' && url === '/users'){
        return res.end('Criação de usuários')
    }

    return res.end('Hello World')
})

server.listen(3333)


