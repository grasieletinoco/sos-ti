const usernameInput = document.getElementById("username");
const usernameLabel = document.querySelector('label[for="username"]');
const usernameHelper = document.getElementById("username-helper");

const emailInput = document.getElementById('email');
const emailLabel = document.getElementById('emailLabel');
const emailHelper = document.getElementById('email-helper');


function togglePopup(input, label) {
    input.addEventListener("click" , () => {
        label.classList.add("required-popup");
    })
    
    input.addEventListener('blur', () => {
        label.classList.remove('required-popup');
    })
};


usernameInput.addEventListener('input', (event)=>{
    const value = event.target.value;

    if (value.length<=3) {
        usernameInput.classList.remove('correct')
        usernameInput.classList.add('error');
        usernameHelper.innerText = '*informe seu nome completo*';
        usernameHelper.classList.add('visible')
    } else {
        usernameInput.classList.remove('error')
        usernameInput.classList.add('correct')
        usernameHelper.classList.remove('visible')
    }
})


emailInput.addEventListener('input', (event)=>{
    const value = event.target.value;

    if (value.includes('@') && value.includes('.com')) {
        emailInput.classList.remove('error');
        emailInput.classList.add('correct');
        emailHelper.classList.remove('visible');
    } else {
        emailInput.classList.remove('correct');
        emailInput.classList.add('error');
        emailHelper.innerText = '*Informe um E-mail válido*';
        emailHelper.classList.add('visible');
    }

})

togglePopup(usernameInput, usernameLabel)
togglePopup(emailInput, emailLabel)