const http = require('http')
const express = require('express')

const server = http.createServer((req, res) =>{
    console.log(req.url)
    if(req.url == "/")
        res.end('Pogo is a social media application being actively developed by frost.')
    else {
        res.writeHead(404)
        res.end('404 Not Found')
    }
})
server.listen(3000)
