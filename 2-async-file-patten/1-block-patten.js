
const http= require('http');
const server =http.createServer((req,res)=>{
if(req.url ==='/'){
    res.write('home page');
    res.end()
}
if(req.url ==='/about'){
res.write('about');
for(let i=0;i <10;i++){
    for(let j=0; j <10; j++){
        console.log(`${i} ${j}`);
    }
}
res.end()
}else{
res.end('error');
}
})
server.listen(4000,()=>{
    console.log('server listening  on port :4000........')
})