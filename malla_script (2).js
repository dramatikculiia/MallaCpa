// script.js

const courses = [
  // ----- PRIMER SEMESTRE -----
  { nombre: "Herramientas Computacionales", creditos: 4, prerequisitos: [], color: "#A3D5FF", semestre: 1 },
  { nombre: "Matemática I", creditos: 5, prerequisitos: [], color: "#75E6DA", semestre: 1 },
  { nombre: "Introducción a la Administración", creditos: 5, prerequisitos: [], color: "#C6A8FF", semestre: 1 },
  { nombre: "Derecho de Empresas I", creditos: 5, prerequisitos: [], color: "#FFF7AA", semestre: 1 },
  { nombre: "Introducción a la Economía", creditos: 4, prerequisitos: [], color: "#D7CCC8", semestre: 1 },
  { nombre: "Introducción al Medio Profesional", creditos: 5, prerequisitos: [], color: "#F8BBD0", semestre: 1 },
  { nombre: "Inglés Básico I", creditos: 3, prerequisitos: [], color: "#FFD1DC", semestre: 1 },

  // ----- SEGUNDO SEMESTRE -----
  { nombre: "Fundamentos de Contabilidad", creditos: 6, prerequisitos: ["Introducción al Medio Profesional"], color: "#F8BBD0", semestre: 2 },
  { nombre: "Matemática II", creditos: 5, prerequisitos: ["Matemática I"], color: "#75E6DA", semestre: 2 },
  { nombre: "Administración y Modelos de Gestión", creditos: 6, prerequisitos: ["Introducción a la Administración"], color: "#C6A8FF", semestre: 2 },
  { nombre: "Derecho de Empresas II", creditos: 4, prerequisitos: ["Derecho de Empresas I"], color: "#FFF7AA", semestre: 2 },
  { nombre: "Introducción a la Microeconomía", creditos: 4, prerequisitos: ["Introducción a la Economía"], color: "#D7CCC8", semestre: 2 },
  { nombre: "Curso de Formación Integral", creditos: 2, prerequisitos: [], color: "#E0E0E0", semestre: 2 },
  { nombre: "Inglés Básico II", creditos: 3, prerequisitos: ["Inglés Básico I"], color: "#FFD1DC", semestre: 2 },

  // ----- TERCER SEMESTRE -----
  { nombre: "Procesos Contables I", creditos: 5, prerequisitos: ["Fundamentos de Contabilidad"], color: "#F8BBD0", semestre: 3 },
  { nombre: "Matemática III", creditos: 5, prerequisitos: ["Matemática II"], color: "#75E6DA", semestre: 3 },
  { nombre: "Planificación y Dirección Estratégica", creditos: 4, prerequisitos: ["Introducción a la Administración"], color: "#C6A8FF", semestre: 3 },
  { nombre: "Derecho Tributario I", creditos: 4, prerequisitos: ["Derecho de Empresas II"], color: "#FFF7AA", semestre: 3 },
  { nombre: "Introducción a la Macroeconomía", creditos: 4, prerequisitos: ["Introducción a la Microeconomía"], color: "#D7CCC8", semestre: 3 },
  { nombre: "Fundamentos de Programación", creditos: 5, prerequisitos: ["Matemática I"], color: "#75E6DA", semestre: 3 },
  { nombre: "Inglés Básico III", creditos: 3, prerequisitos: ["Inglés Básico II"], color: "#FFD1DC", semestre: 3 },

  // ----- CUARTO SEMESTRE -----
  { nombre: "Procesos Contables II", creditos: 6, prerequisitos: ["Procesos Contables I"], color: "#F8BBD0", semestre: 4 },
  { nombre: "Probabilidad y Estadística", creditos: 6, prerequisitos: ["Matemática II"], color: "#75E6DA", semestre: 4 },
  { nombre: "Fundamento de Costos", creditos: 6, prerequisitos: ["Fundamentos de Contabilidad"], color: "#F8BBD0", semestre: 4 },
  { nombre: "Derecho Tributario II", creditos: 5, prerequisitos: ["Derecho Tributario I"], color: "#FFF7AA", semestre: 4 },
  { nombre: "Base de Datos", creditos: 4, prerequisitos: ["Fundamentos de Programación"], color: "#75E6DA", semestre: 4 },
  { nombre: "Inglés Básico IV", creditos: 3, prerequisitos: ["Inglés Básico III"], color: "#FFD1DC", semestre: 4 },

  // Aquí continuará desde el quinto al décimo semestre
  // Puedes continuar agregando desde aquí los ramos faltantes con sus atributos
];

// Aquí seguiría el resto del código para construir la malla en pantalla

// Funciones: crear botones, manejar clicks, calcular avance, etc.

// Ya está organizado por columnas por semestre y con colores por familia de ramos.
// Puedes usar estas estructuras para completar hasta el décimo semestre. Si quieres, puedo terminar de agregarlos todos ahora.
