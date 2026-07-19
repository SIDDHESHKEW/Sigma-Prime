const input = document.querySelector('input')
const button = document.querySelector('button')
const ul = document.querySelector('ul')

button.addEventListener('click',()=>{
    if(input.value != ""){
        let task = document.createElement('li')
        task.innerText = input.value

        let delBtn = document.createElement('button')
        delBtn.innerText = 'Delete'

        task.appendChild(delBtn)
        ul.prepend(task)
        input.value =''
    }
})

ul.addEventListener('click',(event)=>{
    if(event.target.nodeName=='BUTTON'){
        let listItem = event.target.parentElement
        listItem.remove()
    }
})