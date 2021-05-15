const {readfile} = require('fs')
const { reject } = require('lodash')
const { resolve } = require('path')

const getText = (path) => {
    return new Promise((resolve, reject) =>{
        readfile(path, 'utf8', (err,data)=> {
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
}