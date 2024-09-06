// setTimeout(() => {
//     console.log(`timer: settimeoout`)
// }, 0);
// setImmediate(()=>{
//     console.log(`check : setimmedatte`)
// })
// process.nextTick(()=>{
//     console.log(`microtask :process.nextTick`)
// })
// Promise.resolve().then(()=>{
//     console.log(`microstask:promise`)
// })
// console.log(`main`)

//expected out put

// main
// microtask :process.nextTick
// microstask:promise
// timer: settimeoout
// check : setimmedatte

//queueMicrotask()
// Promise.resolve().then(()=>{
//     console.log(`microstask:promise`)
// })
// process.nextTick(()=>{
//     console.log(`microtask :process.nextTick`)
// })

// queueMicrotask(()=>{
//     console.log(`microtask : queueMicroTask`)
// })
// Promise.resolve().then(()=>{
//     console.log(`microstask:promise`)
// })
// process.nextTick(()=>{
//     console.log(`microtask :process.nextTick`)
// })
// expected output

// microtask :process.nextTick
// microtask :process.nextTick
// microstask:promise
// microtask : queueMicroTask
// microstask:promise

// setTimeout(()=>{
//     console.log(`setTimeout`)
//     process.nextTick(()=>{
//         console.log(`process.nextTick() inside setTimeout`)
//     })
// })
// setImmediate(()=>{
//     console.log(`setimmediate`)
//     Promise.resolve().then(()=>{
//         console.log(`promise inside setimmediate`)
//     })
// })
//expected out put
// setTimeout
// process.nextTick() inside setTimeout
// setimmediate
// promise inside setimmediate

console.log('start')
setTimeout(()=>{
    console.log('first')
},100)
setTimeout(()=>{
    console.log(`secomd`)
},0)
Promise.resolve().then(()=>{
    console.log(`promise`)
    setTimeout(()=>{
        console.log(`inside promise settimeout`)
    },0)
})
setTimeout(()=>{
    console.log(`third`)
},0)
console.log('end')
//expected output
// start
// end
// promise
// secomd
// third
// inside promise settimeout
// first