// API = application programming ineterface

// let jsonRes = '{"fact": "Blue-eyed, white cats are often prone to deafness.","length": 50}'

// let ans = JSON.parse(jsonRes)
// console.log(ans)

// // let toJson = JSON.stringify(ans)
// // console.log(toJson)


// Part - II 

let url = 'https://catfact.ninja/fact'

// fetch(url)
// .then((result)=>{
//     console.log("Data - 1 Extacted Successfully")
//     return result.json()
// })
// .then((result)=>{
//     console.log(result.fact)
//     return fetch(url)
// })
// .then((result)=>{
//     console.log("Data - 2 Extacted Successfully")
//     return result.json()
// })
// .then((result)=>{
//     console.log(result.fact)
// })
// .catch((err)=>{
//     console.log("Caught Err -",err)
// })

// Part - III

// async function catFacts(){
//     try{
//         let raw = await fetch(url)
//         let fact = await raw.json()
//         console.log(fact.fact)
//     }catch(e){
//         console.log("Error - ",e)
//     }  
// }


// Part - 4 

let h2 = document.querySelector('h2')
let p = document.querySelector('p')
let button = document.querySelector('button')

button.addEventListener('click',async ()=>{
    await getCatFacts()
})

async function getCatFacts(){
    try{
        let res = await axios.get(url)
        p.innerText = res.data.fact
    }
    catch(e){
        console.log("Error - ",e)
    }
    
}


// Part - 5

let url2 = "https://dog.ceo/api/breeds/image/random"  // dog images api

let img = document.querySelector('img')
let dog = document.querySelector('.evoke')

async function getImage(){
    try{let res = await axios.get(url2)
    let image = res.data.message
    img.setAttribute('src',image)
    // let source = img.attributes[0].value
    // source = image
    // console.log("source =",source)
    // console.log("image = ",image)

    }catch(e){
        console.log('Err -',e)
    }
}

dog.addEventListener('click',async ()=>{
    getImage()
})



// Part - 6 

let url3 = "https://icanhazdadjoke.com/"

async function getJokes(){
    const config = {headers : {Accept:"application/json"}}
    let res = await axios.get(url3,config)
    console.log(res.data.joke)
}


// Part - 7 

let url4 = ""

