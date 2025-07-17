const ramos = [
  // Ejemplo de estructura: puedes completar el resto igual
  { id: "herramientas", nombre: "Herramientas Computacionales", creditos: 4, prer: [], color: "#ADD8E6", semestre: 1 },
  { id: "matematica", nombre: "Matemática", creditos: 6, prer: [], color: "#40E0D0", semestre: 1 },
  { id: "admin", nombre: "Introducción a la Administración", creditos: 5, prer: [], color: "#C8A2C8", semestre: 1 },
  { id: "derecho", nombre: "Derecho de Empresas", creditos: 5, prer: [], color: "#FFFACD", semestre: 1 },
  { id: "eco", nombre: "Introducción a la Economía", creditos: 5, prer: [], color: "#D2B48C", semestre: 1 },
  { id: "medio", nombre: "Introducción al Medio Profesional", creditos: 2, prer: [], color: "#E6B7C5", semestre: 1 },
  { id: "ingles", nombre: "Inglés Básico", creditos: 3, prer: [], color: "#FFC0CB", semestre: 1 },
  // Más ramos en otros semestres con sus prerrequisitos y colores heredados...
];

const contenedor = document.getElementById("malla");
const totalCreditos = ramos.reduce((s, r) => s + r.creditos, 0);
let ramosAprobados = [];

function render() {
  contenedor.innerHTML = "";
  ramos.forEach(r => {
    const div = document.createElement("div");
    div.className = "ramo";
    div.style.background = ramosAprobados.includes(r.id) ? r.color : "#ffffffaa";
    div.style.opacity = ramosAprobados.includes(r.id) || r.prer.every(p => ramosAprobados.includes(p)) ? 1 : 0.4;
    div.innerHTML = `${r.nombre}<span>${r.creditos} créditos</span>`;
    if (ramosAprobados.includes(r.id)) div.classList.add("aprobado");
    div.onclick = () => {
      if (!ramosAprobados.includes(r.id) && r.prer.every(p => ramosAprobados.includes(p))) {
        ramosAprobados.push(r.id);
        render();
        actualizarResumen();
      }
    };
    contenedor.appendChild(div);
  });
}

function actualizarResumen() {
  const creditosActuales = ramos.filter(r => ramosAprobados.includes(r.id)).reduce((s, r) => s + r.creditos, 0);
  document.getElementById("creditos").textContent = creditosActuales;
  document.getElementById("avance").textContent = ((creditosActuales / totalCreditos) * 100).toFixed(1) + "%";
  document.getElementById("eficiencia").textContent = ((ramosAprobados.length / ramos.length) * 100).toFixed(1) + "%";
}

render();
