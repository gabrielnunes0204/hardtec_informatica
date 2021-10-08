/* FUNÇÃO PARA ADICIONAR UM SCROLL SUAVE AOS LINKS */
function scrollSuave() {
  const links = document.querySelectorAll(".itemMenu");
  const arrayLinks = Array.from(links);

  arrayLinks.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();

      const href = event.currentTarget.getAttribute("href");
      const section = document.querySelector(href);

      section.scrollIntoView({
        behavior: "smooth",
        start: "block",
      });
    });
  });
}
scrollSuave();

/* FUNÇÃO PARA ABRIR O MENU NO RESPONSIVO */
function abrirMenu() {
  const botao = document.querySelector(".botaoMenu");
  const menu = document.querySelector("nav");
  const cssMenu = getComputedStyle(menu);

  window.addEventListener("mousemove", () => {
    if (window.innerWidth > 840) {
      menu.style.display = "block";
    }
  });

  botao.addEventListener("click", () => {
    if (cssMenu.display === "none") {
      botao.innerHTML = "&#10008;";
      menu.style.display = "block";
      menu.classList.add("ativo");
    } else if (cssMenu.display === "block") {
      botao.innerHTML = "&#9776;";
      menu.style.display = "none";
    }
  });
}
abrirMenu();

/* FUNÇÃO PARA VERIFICAR O HORÁRIO DE FUNCIONAMENTO */
function verificarHorario() {
  const circulo = document.querySelector("#localizacao span");
  const data = new Date();
  const horario = data.getHours();

  if (horario >= 8 && horario < 19) {
    circulo.style.background = "greenyellow";
  } else if (horario >= 19 && horario <= 24) {
    circulo.style.background = "red";
  } else if (horario > 1 && horario < 8) {
    circulo.style.background = "red";
  }
}
verificarHorario();

//FUNÇÃO PARA ADICIONAR UM SCROLL SUAVE AS PERGUNTAS FREQUENTES
function scrollPerguntas() {
  const faqPerguntas = document.querySelectorAll("dt");
  const faqRespostas = document.querySelectorAll("dd");

  faqRespostas[0].classList.add("ativo");

  function ativarScrollFAQ(index) {
    faqRespostas.forEach((item) => {
      item.classList.remove("ativo");
    });
    faqRespostas[index].classList.add("ativo");
  }

  faqPerguntas.forEach((item, index) => {
    item.addEventListener("click", () => {
      ativarScrollFAQ(index);
    });
  });
}
scrollPerguntas();
