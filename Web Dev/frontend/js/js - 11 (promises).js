// // Part - 1

// function savetoDB(){
//     return new Promise((resolve,reject)=>{
//         let internetSpeed = Math.ceil(Math.random()*10)
//         if(internetSpeed > 4){
//             resolve('Success : Data saved')
//         }else{
//             reject('faliur: something went wrong')
//         }
//     });
// }

// savetoDB()
//     .then(()=>{
//         console.log("data - 1, saved")
//         return savetoDB()
//     })
//     .then(()=>{
//         console.log("data - 2, saved")
//     })
//     .then(()=>{
//         console.log('data - 3, saved')
//     })
//     .catch(()=>{
//         console.log("failure occured!")
//     })


//     // Part - 2
// h1 = document.querySelector('h1')

// function changeColor(color,delay){
    
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             h1.style.color = color
//             resolve()
//         },delay)
//     })
// }

// changeColor('red',500)
//     .then(()=>{
//         console.log('color red applied successfully')
//         return changeColor('blue',500)
//     })
//     .then(()=>{
//         console.log("color changed to blue")
//         return changeColor('green',500)
//     })
//     .then(()=>{
//         console.log('color changed last time')
//     })
//     .then(()=>{
//         console.log('color red applied successfully')
//         return changeColor('bluevoilet',500)
//     })
//     .then(()=>{
//         console.log('color red applied successfully')
//         return changeColor('black',500)
//     })
//     .then(()=>{
//         console.log('color red applied successfully')
//         return changeColor('brown',500)
//     })
//     .then(()=>{
//         console.log('color red applied successfully')
//         return changeColor('grey',500)
//     })
//     .then(()=>{
//         console.log('color red applied successfully')
//         return changeColor('blue',500)
//     })
//     .then(()=>{
//         console.log('color red applied successfully')
//         return changeColor('red',500)
//     })
//     .catch(()=>{
//         console.log('its error time')
//     })


// Part - 3  async keywords

// async function hello(){

//     throw "Weak connection"
    
// }

// let hello0 = async ()=>{
//     console.log('hey')
// }

// hello()
// .then((result)=>{
//     console.log('success, value returened properly',result)
// })
// .catch((error)=>{
//     console.log('probleam accured:',error)
// })


// hello0()
// .then((result)=>{
//     console.log('success, value returened properly',result)
// })
// .catch((error)=>{
//     console.log('probleam accured:',error)
// })

// Part - 4 - await keyword

h1 = document.querySelector('h1')

function changeColor(color,delay){
    
    return new Promise((resolve)=>{
        setTimeout(()=>{
            h1.style.color = color
            resolve()
        },delay)
    })
}


async function show(){
       await changeColor('red',1000)
       await changeColor('blue',1000)
       await changeColor('green',1000)
       await changeColor('bluevoilet',1000)
       await changeColor('brown',1000)
       changeColor('black',1000)
}

// Part - 5

h1 = document.querySelector('h1')

function changeColor(color,delay){
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let random = Math.ceil(Math.random()*5)
            if(random<3){
                reject('Promise Rejected')
            }
            h1.style.color = color
            console.log('color changed to:',color)
            resolve()
        },delay)
    })
}


async function show(){
    try{
       await changeColor('red',1000)
       await changeColor('blue',1000)
       await changeColor('green',1000)
       await changeColor('bluevoilet',1000)
       await changeColor('brown',1000)
       changeColor('black',1000)
    }catch(err){
        console.log('Caught Error')
        console.log(err)
    }
    console.log("everything worked properly")
}

