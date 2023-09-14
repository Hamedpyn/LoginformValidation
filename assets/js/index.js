// DOM Selectors

let nameInput = document.querySelector('#name');
let emailInput = document.querySelector('#email');
let passWordInput = document.querySelector('#pass');
let signUpBtn = document.querySelector('#signUp');
let form = document.querySelector('.form');
let resetBtn = document.querySelector('#resetBtn');
let nameText = document.querySelector('#nameText');
// Selecting all input fields
let allInputs = document.querySelectorAll('.input');
let emailText = document.querySelector('#emailText');
let passText = document.querySelector('#passText');

// Events
nameInput.addEventListener('focusout', formValidation);
emailInput.addEventListener('focusout', formValidation);
passWordInput.addEventListener('focusout', formValidation);
// Adding event listener for reset button click to reset the form
resetBtn.addEventListener('click', () => {
    form.reset();
});
// Adding event listener for DOMContentLoaded event to disable the sign up button
document.addEventListener('DOMContentLoaded', () => {
    disablingBtn();
});

// functions

// Disabling the sign up button
function disablingBtn() {
    signUpBtn.disabled = true;
}

// Performing form validation
function formValidation() {
    if (this.value.length > 1) {
        if (this.type == 'email') {
            if (this.value.includes('@')) {
                right(this, emailText); // Calling right function if email is valid
            } else {
                wrong(this, emailText); // Calling wrong function if email is invalid
            }
        } else if (this.type == 'text') {
            if (this.value.length > 7) {
                right(this, nameText); // Calling right function if name is valid
            } else {
                wrong(this, nameText); // Calling wrong function if name is invalid
            }
        } else if (this.type == 'password') {
            if (this.value.length > 8) {
                right(this, passText); // Calling right function if password is valid
            } else {
                wrong(this, passText); // Calling wrong function if password is invalid
            }
        }
    } else {
        this.style.border = '1px solid red'; // Applying red border if input value is empty
    }

    if (nameInput.style.borderColor == 'green' && emailInput.style.borderColor == 'green' && passWordInput.style.borderColor == 'green') {
        signUpBtn.disabled = false; // Enabling sign up button if all input values are valid
    } else {
        signUpBtn.disabled = true; // Disabling sign up button if any input value is invalid
    }
}

// Adding event listener for sign up button click
signUpBtn.addEventListener('click', () => {
    // Resetting border color for all input fields
    allInputs.forEach(input => {
        input.style.borderColor = "#ebebeb";
    });
    form.reset(); // Resetting the form
});

// Applying green border for valid input and hiding the error message
function right(x, y) {
    x.style.border = '1px solid green';
    y.setAttribute('style', 'display:none');
}

// Applying red border for invalid input and displaying the error message
function wrong(x, y) {
    x.style.border = '1px solid red';
    y.setAttribute('style', 'display:block');
}