const EventEmitter = require("events");

const emitter=new EventEmitter()
emitter.on('login',({name})=>{
    console.log(`hii welcome ${name}`)
})
emitter.emit('login',{name:'salih'})