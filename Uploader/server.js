const net = require('net')

// creating server
const server = net.createServer()

// when a client connects server listenes through connection event and also receives socket object
server.on("connection",(socket)=>{
    console.log("Connection established")
    
    socket.on("data",()=>{
        
    })

})

server.listen(5000,"::1",()=>{
    console.log(`Uploader Server opened on ${server.address}`)
})