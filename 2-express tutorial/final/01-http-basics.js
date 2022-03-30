// console.log('express tut');
const http =require('http')
const {readFileSync} =require('fs')

// get all file
const homepage = readFileSync('./index.html')


const server = http.createServer((req,res)=>{
    // console.log('user hit the server');
    // console.log(req.method)
    // console.log(req.url)
    const url=req.url;
    if(url === '/'){
        //home page 
    res.writeHead(200,{'content-type':'text/html'})
    res.write(homepage)
    res.end()
}
if(url === '/about'){
    // about page
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>this is about page</h1>')
    res.end('this is about page writting in res.end function')
}
else{
    // 404
        res.writeHead(404,{'content-type':'text/html'})
        res.write('<h1>page note found</h1>')
        res.end('this is error')
}
    
})
server.listen(5000)