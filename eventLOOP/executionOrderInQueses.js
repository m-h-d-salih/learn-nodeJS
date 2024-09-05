setTimeout(() => {
    console.log(`timer: settimeoout`)
}, 0);
setImmediate(()=>{
    console.log(`check : setimmedatte`)
})
process.nextTick(()=>{
    console.log(`microtask :process.nextTick`)
})
Promise.resolve().then(()=>{
    console.log(`microstask:promise`)
})
console.log(`main`)

//expected out put

// main
// microtask :process.nextTick
// microstask:promise
// timer: settimeoout
// check : setimmedatte

//queueMicrotask()


queueMicrotask(()=>{
    console.log(`microtask : queueMicroTask`)
})
Promise.resolve().then(()=>{
    console.log(`microstask:promise`)
})
process.nextTick(()=>{
    console.log(`microtask :process.nextTick`)
})
// expected output

// microtask :process.nextTick
// microtask :process.nextTick
// microstask:promise
// microtask : queueMicroTask
// microstask:promise
