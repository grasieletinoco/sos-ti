// ================================================= MAIN =================================================

let texto1 = document.getElementById("texto1");
let texto2 = document.getElementById("texto2");
let texto3 = document.getElementById("texto3");
let botao1 = document.getElementById("img1");
let botao2 = document.getElementById("img2");
let botao3 = document.getElementById("img3");

botao1.addEventListener("click", () => {
    texto1.classList.toggle('hidden')
})

botao2.addEventListener("click", () => {
    texto2.classList.toggle('hidden')
})

botao3.addEventListener("click", () => {
    texto3.classList.toggle('hidden')
})


// ================================================= FOOTER =================================================
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
      e.preventDefault()
      alert('O Email Precisa Ser Preenchido Corretamente')
    } else {
      alert("Você foi Inscrito com Sucesso!")
    }
  })