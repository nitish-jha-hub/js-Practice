let n = new Promise ((res, rej)=>{
setTimeout(()=>{
        // console.log("promises triggered")
        res("value 1")
    },1000)
})

let n1 = new Promise ((res, rej)=>{
setTimeout(()=>{
        // console.log("promises triggered")
        res("value 2")
    },2000)
})

let n2 = new Promise ((res, rej)=>{
setTimeout(()=>{
        // console.log("promises triggered")
        res("value 3")
    },3000)
})

let n3 = new Promise ((res, rej)=>{
setTimeout(()=>{
        // console.log("promises triggered")
        rej(new Error("Something went wrong"))
    },3000)
})

// n.then((value)=>{
//     console.log(value)
// })
// n1.then((value)=>{
//     console.log(value)
// })
// n2.then((value)=>{
//     console.log(value)
// })

// promise all to get result from all promises in single array on same time
// let promise_all = Promise.all([n,n1,n2,n3]) 
// promise_all.then((value)=>{
//     console.log(value)
// })

// give value of all resolved
let promise_all = Promise.allSettled([n,n1,n2,n3]) 
promise_all.then((value)=>{
    console.log(value)
})

