const http = require("http")
const {handleGetRequest} = require("./handleGetRequest")
const server = http.createServer(handleGetRequest)

const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`)
})