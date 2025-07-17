
const malla = [
  {
    nombre: "Herramientas Computacionales",
    credito: 4,
    requisitos: [],
    color: "#A2DFFF"
  },
  {
    nombre: "Matemática I",
    credito: 5,
    requisitos: [],
    color: "#1abc9c"
  },
  {
    nombre: "Introducción a la Administración",
    credito: 5,
    requisitos: [],
    color: "#B39DDB"
  },
  {
    nombre: "Derecho de Empresas I",
    credito: 5,
    requisitos: [],
    color: "#FFF9C4"
  },
  {
    nombre: "Introducción a la Economía",
    credito: 4,
    requisitos: [],
    color: "#D7CCC8"
  },
  {
    nombre: "Introducción al Medio Profesional",
    credito: 5,
    requisitos: [],
    color: "#F8BBD0"
  },
  {
    nombre: "Inglés Básico I",
    credito: 3,
    requisitos: [],
    color: "#F48FB1"
  }
];

const container = document.getElementById("malla-container");
container.classList.add("malla");

let creditosTotales = malla.reduce((acc, ramo) => acc + ramo.credito, 0);
let creditosAprobados = 0;

malla.forEach((ramo, index) => {
  const div = document.createElement("div");
  div.className = "ramo";
  div.style.backgroundColor = ramo.color;
  div.innerHTML = `<strong>${ramo.nombre}</strong><br>${ramo.credito} SCT`;
  div.addEventListener("click", () => {
    if (!div.classList.contains("aprobado")) {
      div.classList.add("aprobado");
      creditosAprobados += ramo.credito;
    } else {
      div.classList.remove("aprobado");
      creditosAprobados -= ramo.credito;
    }
    actualizarEstadisticas();
  });
  container.appendChild(div);
});

function actualizarEstadisticas() {
  document.getElementById("creditos").textContent = creditosAprobados;
  const avance = ((creditosAprobados / creditosTotales) * 100).toFixed(2);
  document.getElementById("avance").textContent = `${avance}%`;
  document.getElementById("eficiencia").textContent = `${avance}%`;
}
