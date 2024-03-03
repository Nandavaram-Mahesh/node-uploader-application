const net = require("net");
const fs = require("node:fs/promises");


let fileHandle , fileStream
const socket = net.createConnection({ host: "::1", port: 5050 }, async () => {
  const filePath = "./text.txt";
    fileHandle = await fs.open(filePath, "r");
   fileStream = fileHandle.createReadStream();
  // Reading from the source file
  fileStream.on("data", (data) => {
    socket.write(data);
  });

  fileStream.on("end", () => {
    console.log("The file was successfully uploaded!");
    socket.end();
  });
});
