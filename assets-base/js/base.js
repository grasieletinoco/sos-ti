//INICIO NEWSLETTER
function togglePopup(input, label) {

  // Mostrar Popup de Campo Obrigatório
  input.addEventListener("focus",()=>{
    label.classList.add("required-popup");
  })
  
  // Ocultar Popup de Campo Obrigatório
  input.addEventListener("blur",()=>{
    label.classList.remove("required-popup");
  })
}

// ---------- VALIDAÇÃO EMAIL ---------- //
const emailInput = document.getElementById("email");
const emailHelper = document.getElementById("email-helper");

togglePopup(emailInput)

emailInput.addEventListener('input', (event) => {
  const valorEmail = event.target.value;

  if (valorEmail.includes('@') && valorEmail.includes('.com')) {
    emailInput.classList.remove('error');
    emailInput.classList.add('correct');
    emailHelper.classList.remove('visible');
    checkInputs.emailInput = true;
  } else {
    emailInput.classList.remove('correct');
    emailInput.classList.add('error');
    emailHelper.innerText = 'O Email Precisa Incuir um "@" e um ".com"';
    emailHelper.classList.add('visible');
    checkInputs.emailInput = false;
  }
})

// ---------- ENVIAR FORMULÁRIO ---------- //
const btnSubmit = document.querySelector("button[type ='submit']")

const checkInputs = {
  emailInput: false,
}

btnSubmit.addEventListener("click", (e) =>{
  if (checkInputs.emailInput == false) {
    errorSubmitModal()
  } else {
    correctSubmitModal()
  }
  e.preventDefault()
  Submit();
})

// LIMPAR CAMPOS
function limparCampos(){
  document.getElementById('email').value = '';
  emailInput.classList.remove('correct');
}

// MODAL ERROR SUBMIT
function errorSubmitModal(){
  const modal = document.getElementById('error_submit')
  modal.classList.add('mostrar')

  modal.addEventListener('click', (e) =>{
    if (e.target.id == 'error_submit' || e.target.id == "fechar"){
      modal.classList.remove('mostrar')
      localStorage.fechaModal = 'error_submit'
    }
  })
}

// MODAL CORRECT SUBMIT
function correctSubmitModal(){
  const modal = document.getElementById('correct_submit')
  modal.classList.add('mostrar')

  modal.addEventListener('click', (e) =>{
    if (e.target.id == 'correct_submit' || e.target.id == "fechar"){
      modal.classList.remove('mostrar')
      localStorage.fechaModal = 'correct_submit'
    }
  })
}

//FIM NEWSLETTER


//INICIO BUTTON BACK TO TOP
var btnTop = document.querySelector('#button_top');

  var btnReveal = function () { 
    if (window.scrollY > 300) {
      btnTop.classList.add('visible');
    } else {
      btnTop.classList.remove('visible');
    }    
  }  

  var TopscrollTo = function () {
    if(window.scrollY!=0) {
      setTimeout(function() {
        window.scrollTo(0,window.scrollY-30);
        TopscrollTo();
      }, 5);
    }
  }
  window.addEventListener('scroll', btnReveal);
  btnTop.addEventListener('click', TopscrollTo);

  //FINAL BUTTON BACK TO TOP