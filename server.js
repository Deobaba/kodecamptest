const { readFileSync } = require('fs')
const http = require('http')


PORT = process.env.PORT || 3000

const userInfo = {
    name : "Adenekan Adeola",
    emnail: "adexsquare4192@gmail.com",
    age: 27
}

const Middleware = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
};



const server = http.createServer((req, res) => {
    //middleware 
    Middleware(req, res, () => {
    //   file route
       if(req.url==='/file'){
             res.statusCode = 200
             res.setHeader("content-type","text/plain")
             const first = readFileSync('data.txt','utf8')
             res.end(`${first}`)      
        }
    //  api/user route
       else if(req.url ==='/api/user'){
            res.statusCode = 200
            res.setHeader("content-type","application/json")
            res.write(JSON.stringify(userInfo))
            res.end()
            
        }
    //  / route
        else{
            res.statusCode = 200
            res.setHeader("content-type","text/plain")
            res.end("Hello,Nodejs!")
        }
            
    });
});

server.listen(PORT, ()=>{
    console.log(`server is on ${PORT}`)
})