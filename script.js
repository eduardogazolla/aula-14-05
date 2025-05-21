let peso;
let altura;
let imc;

function setCookie(name, value, days) {
    const d = new Date();
    d.setTime(d.getTime() + (days*24*60*60*1000));
    document.cookie = `${name}=${value};expires=${d.toUTCString()};path=/`;
  }

  function getCookie(name) {
    const cookieArr = document.cookie.split(';');
    for (let i = 0; i < cookieArr.length; i++) {
      const cookie = cookieArr[i].trim();
      if (cookie.indexOf(name + "=") === 0) {
        return cookie.substring(name.length + 1);
      }
    }
    return null;
  }

function calcImc(peso, altura) {
  imc = peso / (altura * altura);

  let classificacao = "";
  if (imc < 18.5) classificacao = "Abaixo do peso";
  else if (imc < 25) classificacao = "Peso normal";
  else if (imc < 30) classificacao = "Sobrepeso";
  else if (imc < 40) classificacao = "Obesidade";
  else classificacao = "Obesidade Grave";

  document.getElementById("resultado").innerHTML = `
          <p><strong>Seu IMC é:</strong> ${imc.toFixed(2)}</p>
          <p><strong>Classificação:</strong> ${classificacao}</p>
        `;
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    setCookie("modo_escuro", document.body.classList.contains("dark-mode") ? "sim" : "nao", 30);
  }

  function aplicarModoEscuroSalvo() {
    const modoEscuro = getCookie("modo_escuro");
    if (modoEscuro === "sim") {
      document.body.classList.add("dark-mode");
    }
  }

  aplicarModoEscuroSalvo();
