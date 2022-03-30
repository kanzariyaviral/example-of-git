const {readFile}= require('fs');
console.log('do first');
readFile('./content/second.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    console.log(result);
    console.log("doing second");

})
console.log('doing third');