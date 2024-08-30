
const EventEmitter=require('events')
const emitter=new EventEmitter();//EventEmitter : core class used to handle event
//
emitter.on('login',()=>{//this function is call when the specific event is triggered
console.log('user logged in')
})
//event emission
emitter.emit('login');//triggering an event

//what if i need to pass parameters 

emitter.on('order',({item,price})=>{//this function is call when the specific event is triggered
    console.log(`you are ordered ${item} that cost '$ ${price} `)
    })
    emitter.emit('order',{item:'pizza',price:200})

    //what if i give deffrent function to same event
    //ans: it will deffrentiate with the parameter
emitter.on('order',({item})=>console.log(`u ordered ${item}`))
emitter.emit('order',{item:'pizza'})
emitter.once('logout',()=>{//this function will work once 
    console.log('user logged out')
    })
emitter.emit('logout') //this will work
emitter.emit('logout')// but this is not going to work
//what if  i need to remove a specific event and its method

// const welcome=(user)=>{
//     console.log(`welcome ${user}` )
// }
// emitter.on('welcome',welcome)
// emitter.emit('welcome',"salih")
// emitter.off('welcome');
// emitter.emit('welcome',"salih")// this wont work