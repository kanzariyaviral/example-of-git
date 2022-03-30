const EventEmitter=require('events');
const customEmitter=new EventEmitter()
customEmitter.on('response',(name,id)=>{
    console.log(`data recieved from ${name} and id  ${id}`)
})
customEmitter.on('response',()=>{
    console.log(`do some thing `)
})
customEmitter.emit('response','amit',52);

