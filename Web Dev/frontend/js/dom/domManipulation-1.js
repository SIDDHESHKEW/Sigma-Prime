// Practice Question

let body = document.querySelector('body')

let para = document.createElement('p')
para.innerText = "Hey I'M Red!"
para.style.color = 'red'
body.append(para)

let head = document.createElement('h3')
head.innerText = "Hey I'M a blue H3!!"
head.style.color = 'blue'
body.append(head)


let div = document.createElement('div')
let bigHead = document.createElement('h1')
let para1 = document.createElement('p')

div.style.border = 'black'
div.style.backgroundColor = 'pink'

bigHead.innerText = "I'M in a div"

para1.innerText = "Me too!!"

body.append(div)
div.appendChild(bigHead)
div.appendChild(para1)


// Assignment

let input = document.createElement('input')
let btn1 = document.createElement('button')
btn1.innerText = 'click me!'
btn1.setAttribute('id','btn')
input.type = 'text'
input.placeholder = 'Username'

body.append(input, btn1)

let blueButton = document.querySelector('#btn')

let big = document.createElement('h1')
big.innerText = "DOM Practice"
big.style.color = 'purple'
body.append(big)


let outer = document.querySelector('.outer')
let inner = document.querySelector('.inner')
let list = document.querySelector('ul')

list.addEventListener('click',()=>{
    console.log('I am list')
})
inner.addEventListener('click',()=>{
    console.log('I am inner')
})
outer.addEventListener('click',()=>{
    console.log('I am outer')
})

