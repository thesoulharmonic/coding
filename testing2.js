function fun1 (){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    //reject('Error 404')
    resolve('😵')
    }, 100)
    })
}   

function fun2 (){
    return new Promise((resolve, reject) => {
    setTimeout(() => {
    reject('🤑')
    }, 100)
    })
}   


function onSuccess(data){
    console.log(data)}

function onError(errorCode){
    console.log(`Error: ${errorCode}`)}

function onFinal(){
    console.log(`We done`)}

fun1()
.then(fun2)
.then(onSuccess)
.catch(onError)
.finally(onFinal)