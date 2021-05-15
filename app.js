const http = require('http')

const server = http.createServer((req, res) => {
    if(req.url == '/'){
        res.end('home')
    }
    if(req.url == '/about'){
        res.end('about')
    }
    else{
        res.end('404 error')
    }
})

server.listen(5000,() =>{
    console.log('server listening in port 5000');
})