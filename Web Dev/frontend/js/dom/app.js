// <<<<<<<<<<      ==  new function
// <--  == example of that function



// let image = document.getElementById("mainImg");         <<<<<<<<<<<<<<

// image.src = "http://127.0.0.1:3000/creation_1.png"

 

// let collection = document.getElementsByClassName("oldImg")         <<<<<<<<<<<<<

// for(ele of collection){
//     console.dir(ele.src = "spiderman_img.png")
// }



// let tags = document.getElementsByTagName("p")          <<<<<<<<<<



// let query = document.querySelector("#description")           <<<<<<<<<<<<<<<<<<



// let allQuery = document.querySelectorAll("div a")        <<<<<<<<<<<<<<<<<<<<<



// let head = document.querySelector('h1')                     <<<<<<<<<<<
// head.innerHTML = `<u>${head.innerText}</u>`



// obj.getAttribute() <<<<<<<<<<<<<
// obj.setAttribute()  <<<<<<<<<<<<<<<

let image = document.querySelector('img');      //<--
// image.getAttribute('id')
// image.setAttribute('id','image')


// let para = document.querySelector('p')   <--
// para.style.color = 'red'

// let anchor = document.querySelectorAll('.box a')

// for(ele of anchor){
//     ele.style.color='orange'
// }



// obj.callList.add()   <<<<<<< adds new class while letting old classes exist together
// obj.callList.remove()    <<<<<<<<<<< removes the class
// obj.callList.contains()         <<<<<<<<< cheacks wheter the class passed in parantheses exist or not
// obj.callList.toggel()            <<<<<<<< swich off or on the access to any class alloted

let box = document.querySelector('.box')     //<--
// box.classList.add('box-manipulation')




// children   <<<< tells the children of the element
// parentElement   <<<<< tells parent
// childElementCount   <<<<<<<<<<<
// .previousElementSibling / .nextElementSibling  <<<<<<<<<<<<

// image.previousElementSibling.style.color = 'red'        <--




// document.createElement()      <<<<<<<<<<<<<<<<<<< creates a new element in the document
// appendChild(element)          <<<<<<<<<<<<<<<<<<<
// append(element)              <<<<<<<<<<<<<<<<<<<
// prepand(element)<<<<<<<<<<<<<<<<<<<<<<<<<<
// insertAdjecent(where,element)          <<<<<<<<<<<<<<<<<<<
// elment.remove()        <<<<<<<<<<<<<<

let para = document.createElement('p')              //<--
para.innerText = 'Hey, i am creted from javascript'

// box.append(para)

let head = document.querySelector('.box h4')
head.appendChild(para)

let button = document.createElement('button')
button.innerText = 'click me'

para.append(button)

let para2 = document.createElement('p')
para2.innerText = 'i am the king' 
box.prepend(para2)

let btn = document.createElement('button')
btn.innerText = 'see me!'

let inPara = document.querySelector('p')

// inPara.insertAdjacentElement('beforeBegin',btn)
// inPara.insertAdjacentElement('afterBegin',btn)
// inPara.insertAdjacentElement('beforeEnd',btn)
// inPara.insertAdjacentElement('afterEnd',btn)

// btn.remove()

















