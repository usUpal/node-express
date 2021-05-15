const { reject } = require("lodash");

const p = new Promise((resolve, reject) => {
    let a = 1+2
    if (a == 2){
        resolve('success')
    }else{
        reject('failed')
    }
})

p.then((msg) => {
    console.log(`this is in the then ${msg}`)
}).catch((msg) =>{
    console.log(`this is in the catch ${msg}`)
    
})