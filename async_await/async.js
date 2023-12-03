async function nitish() {
    let p = new Promise(()=>{
        setTimeout(()=>{
        console.log(1)
        },2000)
    })

    setTimeout(() => {
        console.log("setTimeout")
        return 11;
    }, 3000)
    let c= await p

    return 10;
}
let a = nitish()
a.then((value) => { console.log(value) });

console.log("connected")