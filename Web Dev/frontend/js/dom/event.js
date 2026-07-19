//  Part - 1

//let button = document.createElement('button')
// button.innerText = "click Me"
// document.body.append(button)

// // button.onclick = () => {
// //     alert("Ram Ram")
// // }

// let button1 = document.createElement('button')
// let button2 = document.createElement('button')
// let button3 = document.createElement('button')
// let button4 = document.createElement('button')

// button1.innerText = 'click me1'
// button2.innerText = 'click me2'
// button3.innerText = 'click me3'
// button4.innerText = 'click me4'

// document.body.append(button1,button2,button3,button4)

// let btns = document.querySelectorAll('button')

// function pointer(element){
//     element.style.cursor = 'pointer'
// }

// for(btn of btns){
//     btn.onmouseenter = pointer(btn)
// }

// for(btn of btns){
//     btn.addEventListener('click',()=>{
//         console.log('hey')
//     })
// }


// // Part - 2

// const button = document.querySelector('button')
// const head = document.querySelector('h1')
// const div = document.querySelector('.color')


// button.addEventListener('click',()=>{
//     let random1 = Math.ceil(Math.random()*255)
//     let random2 = Math.ceil(Math.random()*255)
//     let random3 = Math.ceil(Math.random()*255)

//     head.innerText = `rgb(${random1},${random2},${random3})`
//     div.style.backgroundColor = `rgb(${random1},${random2},${random3})`
//     console.log('changed color to',div.style.backgroundColor) 
// })
  


// // Part - 3



// let h1 = document.querySelector('h1')
// let h3 = document.querySelector('h3')
// let p = document.querySelector('p')
// let button = document.querySelector('button')
// let inp = document.querySelector('input')

// function Change(event){
//     this.style.backgroundColor = 'blue';
//     console.log("done!")
//     console.log(event)
// }

// h1.addEventListener('click',Change)
// h3.addEventListener('click',Change)
// p.addEventListener('click',Change)
// button.addEventListener('click',Change)

// inp.addEventListener('keydown',(event)=>{
//     if(event.code == 'ArrowUp'){
//         console.log("charecter moves forward")
//     }else if(event.code=='ArrowDown'){
//         console.log('the charecter moved down')
//     }else if(event.code=='ArrowLeft'){
//         console.log('The main charecter moved left')
//     }else if(event.code=='ArrowRight'){
//         console.log('the charecter Moved right')
//     }
//     // console.log(event.code)
// })

// Part - 4

// let form = document.querySelector('form')

// form.addEventListener('submit',(event)=>{
//     event.preventDefault();
//     console.log("Form is submited")
// }
// )

// form.addEventListener('submit',function(event){
//     event.preventDefault()
//     let name = this.elements[0]
//     let pass = this.elements[1]

//     alert(`Hi ${name.value}, Your password is set to ${pass.value}`)
// })

// part - 5

// let input = document.querySelector('#editor')

// // input.addEventListener('input',function(event){                 }--- 
// //     console.log('value changed')                                    |                  
// //     console.log('value =',this.value)                               |--> try one by one
// // })                                                                  | 
// // input.addEventListener('change',function(event){                }---
// //     console.log('value changed') 
// //     console.log('value =',this.value)
// // })

// let para = document.querySelector('p')

// input.addEventListener('input',function(event){
//    let para = document.querySelector('#para')
//    para.innerText = this.value
// })



// Assingment 

// let input = document.querySelector('.input')
// let button = document.querySelector('.button')

// button.addEventListener('mouseout',()=>{
//     console.log('mouse out working')
// }) 

// input.addEventListener('keypress',()=>{
//     console.log(input.value)
// })

// window.addEventListener('scroll',()=>{
//     console.log('its scroling')
//     console.log('Ram Ram')
// })

// window.addEventListener('load', (event) => {
//     console.log('The page has fully loaded');
//     // Initialize components that depend on images or external resources here
// });

// let btn = document.createElement('button')
// btn.innerText = 'I am neww!!'
// document.body.append(btn)

// btn.addEventListener('click',()=>{
//     btn.style.backgroundColor = 'green'
// })


// last question

// })


// last question

let head = document.querySelector('h2')
let write = document.querySelector('input')


write.addEventListener('input',(event)=>{
    // Get the current value of the input field
    const inputValue = event.target.value;

    // Check if the input value is not empty
    if (inputValue.length > 0) {
        // Get the last character entered
        const lastChar = inputValue[inputValue.length - 1];

        // Use lastChar from the input value, not event.key
        // event.key is not consistently available or reliable for 'input' events
        const code = lastChar.charCodeAt(0);

        if((code >= 65 && code <=90) || (code >=97 && code <=122)){
            head.innerText = write.value
        }else{
            console.log('these character cannot be included in name')
        }
    }
})

