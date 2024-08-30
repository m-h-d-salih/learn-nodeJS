
const EventEmitter=require('events')
const emitter=new EventEmitter();//EventEmitter : core class used to handle event
//
emitter.on('login',()=>{//this function is call when the specific event is triggered
console.log('user logged in')
})
//event emission
emitter.emit('login');//triggering an event