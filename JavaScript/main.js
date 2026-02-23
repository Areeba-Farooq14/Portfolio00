//menu button    
let menu=document.getElementById('menu')
let links=document.getElementById('links')
menu.addEventListener('click',function(){
    links.classList.toggle('show')
})

let scroll=document.getElementById('btn')
    window.addEventListener('scroll',()=>{
        if(window.scrollY>100){
            scroll.classList.add("show")
        }else{
            scroll.classList.remove("show")
        }
    })

//form validation
let form=document.getElementById('contactform')
function validateEmail(email){
    let emailRegex= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email)
}
form.addEventListener('submit',function(e){
    let name=document.getElementById('name').value
    let email=document.getElementById('email').value
    let msg=document.getElementById('msg').value
    if(name==""){
        alert('name field is required')
        e.preventDefault()
        return;
    }
    if(email==""){
        alert('email field is required')
        e.preventDefault()
        return;

    }if(validateEmail(email)==false){
        alert("Invalid email!")
        e.preventDefault()
        return;
    }
    if(msg==""){
        alert("Please type your message!")
        e.preventDefault()
        return;
    }
})