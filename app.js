const fs  = require('fs')
const { reject, result } = require('lodash')
const { resolve } = require('path')

const getText = (path) => {
    return new Promise((resolve, reject) =>{
        fs.readFile(path, 'utf8', (err,data)=> {
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
}
getText('./content/doc.txt')
  .then(result => console.log(result))
  .catch(err => console.log(err))