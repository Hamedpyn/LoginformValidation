// DOM Selectors

let
    nameInput = document.querySelector('#name'),
    emailInput = document.querySelector('#email'),
    passWordInput = document.querySelector('#pass'),
    signUpBtn = document.querySelector('#signUp'),
    form = document.querySelector('.form'),
    resetBtn = document.querySelector('#resetBtn'),
    nameText = document.querySelector('#nameText'),
    allInputs = document.querySelectorAll('.input'),
    emailText = document.querySelector('#emailText'),
    passText = document.querySelector('#passText');

// Events
nameInput.addEventListener('focusout', formValidation)
emailInput.addEventListener('focusout', formValidation)
passWordInput.addEventListener('focusout', formValidation)
resetBtn.addEventListener('click', () => {
    form.reset()
})
document.addEventListener('DOMContentLoaded', () => {
    disablingBtn()
})

// functions 

function disablingBtn() {
    // disabling the sign up button
    signUpBtn.disabled = true
}

function formValidation() {
    if (this.value.length > 1) {
        if (this.type == 'email') {
            if (this.value.includes('@')) {
                right(this, emailText)
            } else {
                wrong(this, emailText)
            }
        } else if (this.type == 'text') {
            if (this.value.length > 7) {
                right(this, nameText)
            } else {
                wrong(this, nameText)
            }
        } else if (this.type == 'password') {
            if (this.value.length > 8) {
                right(this, passText)
            } else {
                wrong(this, passText)
            }
        }

    } else {
        this.style.border = '1px solid red'
    }
    if (nameInput.style.borderColor == 'green' && emailInput.style.borderColor == 'green' && passWordInput.style.borderColor == 'green') {
        signUpBtn.disabled = false
    } else {
        signUpBtn.disabled = true
    }
}

signUpBtn.addEventListener('click', () => {
    allInputs.forEach(input => {
        input.style.borderColor = "#ebebeb"
    })
    form.reset()
})

function right(x, y) {
    x.style.border = '1px solid green'
    y.setAttribute('style', 'display:none')
}
function wrong(x, y) {
    x.style.border = '1px solid red'
    y.setAttribute('style', 'display:block')
}