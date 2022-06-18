const elementoResposta = document.querySelector("#resposta")
const inputPergunta = document.querySelector("#inputPergunta")
const btnPerguntar = document.querySelector("#btnPerguntar")
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

//gerar n aleatorio

// clicar em fazer pergunta
function fazerPergunta() {
  if (inputPergunta.value === "") {
    alert("Digite sua pergunta")

    return
  }

  btnPerguntar.setAttribute("disabled", true)

  const pergunta = "<div>" + inputPergunta.value + "</div>"

  const totalRespostas = respostas.length
  const randomNumber = Math.floor(Math.random() * totalRespostas)

  console.log(respostas[randomNumber])
  elementoResposta.innerHTML = pergunta + respostas[randomNumber]

  elementoResposta.style.opacity = 1;

  //clear response after 3seg
  setTimeout(function () {
    elementoResposta.style.opacity = 0;
    btnPerguntar.removeAttribute("disabled");
  }, 3000)
}
