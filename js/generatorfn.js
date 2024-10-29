function* generator(){
    yield 1
    yield 2
}
const callgen=generator()
console.log(callgen.next())
console.log(callgen.next()) 