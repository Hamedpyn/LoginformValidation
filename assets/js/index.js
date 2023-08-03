// DOM Selectors

let
    nameInput = document.querySelector('#name'),
    emailInput = document.querySelector('#email'),
    passWordInput = document.querySelector('#pass'),
    signUpBtn = document.querySelector('#signUp'),
    form = document.querySelector('.form'),
    resetBtn = document.querySelector('#resetBtn')

function disablingBtn (){
    signUpBtn.disabled = true
    signUpBtn.setAttribute('style','background-color:#dfdfdfee')
    signUpBtn.style.scale = '1'
}
disablingBtn()

nameInput.addEventListener('blur', formValidation)
emailInput.addEventListener('blur', formValidation)
passWordInput.addEventListener('blur', formValidation)
function formValidation() { }
resetBtn.addEventListener('click',()=>{
    form.reset()
})

