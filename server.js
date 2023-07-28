const { readFile, readFileSync } = require('fs')
const http = require('http')


PORT = process.env.PORT || 3000

const userInfo = {
    name : "Adenekan Adeola",
    emnail: "adexsquare4192@gmail.com",
    age: 27
}

let tobject = JSON.stringify(userInfo)
console.log(tobject)
const server = http.createServer((req,res)=>{
    // console.log(req.url)
    if(req.url==='/file'){
    res.statusCode = 200
    res.setHeader("content-type","text/plain")
    const first = readFileSync('data.txt','utf8')
    res.end(`${first}`)
    return
    }

    if(req.url ==='/api/user'){
        res.statusCode = 200
        res.setHeader("content-type","application/json")
        res.write(JSON.stringify(userInfo))
        res.end()
    }
        res.statusCode = 200
        res.setHeader("content-type","application/json")
        res.end("Hello,Nodejs!")
        console.log('it got here regardless')
})

//  const filedeo = readFile('data.txt','utf8',(err,result)=>{
//     if(err){return}
//     // console.log(result)
//     return result
// })
// console.log(filedeo)

// const first = readFileSync('data.txt','utf8')
// console.log(first)

// const getText = (filePath)=>{
//     return new Promise((resolve,reject)=>{

//         readFile('data.txt','utf8',(err,result)=>{
//             if(err){reject(err)}
//             // console.log(result)
//             else{
//                 resolve(result)
//             }
//         })
//     })
// }

// const deobaba = getText('data.txt').then(result)
// console.log(deobaba)

server.listen(PORT, ()=>{
    console.log(`server is on ${PORT}`)
})