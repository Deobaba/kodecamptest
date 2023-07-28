const http = require('http')


PORT = procees.env.PORT

const server = http.createServer((req,res)=>{

})

server.listen(PORT, ()=>{
    console.log(`server is on ${PORT}`)
})