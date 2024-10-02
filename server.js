const http = require('node:http')

const server = http.createServer((req, res)=>{

    setTimeout(()=>{

        res.statusCode = 200
        res.setHeader("Content-Type", 'application/json')
        res.end(JSON.stringify({
            sucess: true,
            error: false,
            data:{
                token: '123'
            }
        }))
    }, 2000)
})

server.listen(3333, 'localhost')