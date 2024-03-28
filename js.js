const list = document.querySelector('#list')
const btn = document.querySelector('#btn')
const inputField = document.querySelector('#inputField')
list.addEventListener('click',(e)=>{
    if(e.target.matches('li')){
        switch (e.target.innerText){
            case 'javascript':
                e.target.style.background = 'red'
                break;
            case 'python':
                e.target.style.background = 'green'
                break;
            default:
                e.target.style.background = 'blue'


        }
    }
   
})
btn.addEventListener('click',()=>{
    let value = inputField.value
    inputField.value = ''
    const newLi = document.createElement('li')
    list.appendChild(newLi)
    newLi.innerText = value

})