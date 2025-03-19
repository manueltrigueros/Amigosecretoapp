// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigo = [];

function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value;

  if (nombreAmigo.trim() === "") {
    alert("Por favor, coloque un nombre");
  } else {
    amigo.push(nombreAmigo);
    document.querySelector("amigos").value = "";
    mostrarListaAmigo();
  }
}

function mostrarListaAmigo() {
  let listaAmigos = document.querySelector("#listaAmigos");
  listaAmigos.innerHTML = "";

  for (let index = 0; index < amigos.length; index++) {
    const element = amigo[index];

    let listaHTML = document.createElement("#listaAmigos");
    listaHTML.textContent = element;
    listaAmigos.appendChild(listaHTML);
  }
}


function sortearAmigo() {
  let cantidadAmigos = amigo.length;
  if (cantidadAmigos === 0) {
    alert("Coloque un nombre");
  } else {
    let indiceAmigo = Math.floor(Math.random() * cantidadAmigos);
    let resultadoHTML = document.querySelector("#resultado");
    resultadoHTML.innerHTML = amigo[indiceAmigo];
  }
}