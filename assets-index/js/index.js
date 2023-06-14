// ================================================= MAIN =================================================
let texto1 = document.getElementById("texto1");
let texto2 = document.getElementById("texto2");
let texto3 = document.getElementById("texto3");
let botao1 = document.getElementById("img1");
let botao2 = document.getElementById("img2");
let botao3 = document.getElementById("img3");
let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let btnCalcular = document.getElementById("btnCalcular");
let divinp1 = document.getElementById("divinp1");
let divinp2 = document.getElementById("divinp2");
let parabens = document.getElementById("parabens")

btnCalcular.addEventListener("click", ()=> {
  if (input1.value * input2.value == 100) {
  texto1.classList.toggle('hidden')
  divinp1.remove();
  divinp2.remove();
  btnCalcular.remove();
  parabens.innerText = "Muito bem, você acertou! Isto foi um exemplo bem básico do que podemos fazer com HTML e JavaScript.\nAgora pode continuar sua leitura!"
  }
  else {
    alert("Valor incorreto, tente novamente!")
  }
})

/*botao1.addEventListener("click", () => {
    texto1.classList.toggle('hidden')
})*/

botao2.addEventListener("click", () => {
    texto2.classList.toggle('hidden')
})

botao3.addEventListener("click", () => {
    texto3.classList.toggle('hidden')
})