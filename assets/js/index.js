// DOM Selectors

let
    nameInput = document.querySelector('#name'),
    emailInput = document.querySelector('#email'),
    passWordInput = document.querySelector('#pass'),
    signUpBtn = document.querySelector('#signUp');

function disablingBtn (){
    signUpBtn.disabled = true
    // signUpBtn.disabled = true
    signUpBtn.setAttribute('style','background-color:#dfdfdfee')
    signUpBtn.style.scale = '1'
}
disablingBtn()

