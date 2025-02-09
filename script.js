const fullDarkMode = document.querySelector('#full-dark-mode')
const contentDarkMode = document.querySelector('#content-dark-mode')
const content = document.querySelector('.content')


fullDarkMode.addEventListener('change', ()=>{
    if(fullDarkMode.checked){
       document.body.classList.add('dark')
    }else{
        document.body.classList.remove('dark') 
    }
})

contentDarkMode.addEventListener('change', ()=>{
    if(contentDarkMode.checked){
        content.classList.add('dark')
    }else{
        content.classList.remove('dark') 
    }
})