const net = require('net')
const fs = require("node:fs/promises")


// creating server
const server = net.createServer(()=>{})

// when a client connects server listenes through connection event and also receives socket stream
server.on("connection",(socket)=>{
    console.log("Connection established")
    
    // socket is a duplex stream , so u can read and write to it
    socket.on("data",async (data)=>{

        const fileHandle = await fs.open("Storage/test.txt",'w')
        const fileStream = fileHandle.createWriteStream()
        fileStream.write(data)
    })

    // after writing the data to the file we are closing the file
    socket.on("end",()=>{
        console.log("connection Ended")
        fileHandle.close()
    })

})

server.listen(5000,"::1",()=>{
    console.log("Uploader Server opened on",server.address())
})