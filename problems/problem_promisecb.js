"use strict";

/*
  # Practica para manejo de promesas, callbacks, await y async
  @ cofla esta en su ultimo año y necesita recuperar todas sus notas para que le puedan decir si efectivamente paso
  @ el ultimo semestre, de ser asi cofla ya estaria a un solo paso de finalziar la carrera, pero hay un problema,
  @ estas notas estan almacenadas en otro servidor para
  * crear un sistema que almacene toda la informacion de las materias y las muestre en pantalla
*/

const tableMaterias = document.querySelector('.materias__list');

const materias = [
  {
    nombre: 'Fisica 1',
    nota: 10
  },
  {
    nombre: 'Ecuaciones Diferenciales',
    nota: 8
  },
  {
    nombre: 'Programacion web',
    nota: 9
  },
  {
    nombre: 'Lenguajes de programacion 1',
    nota: 7
  },
  {
    nombre: 'Desarrollo de software',
    nota: 8
  }
];

const getMateria = (id) => {
  return new Promise((resolve, reject) => {
    let materia = materias[id];
    if (materia === undefined) {
      reject("No se encontro la materia");
    } else {
      setTimeout(() => {
        resolve(materia);
      }, Math.random() * 400);
    }
  });
};

const showMaterias = async () => {
  let materia = [];
  for (let i = 0; i < materias.length; i++) {
    materia[i] = await getMateria(i);
    let addHtmlMaterias = `
      <div class="materias__list-content">
        <div class="materias__list-nombre">${materia[i].nombre}</div>
        <div class="materias__list-calificacion">${materia[i].nota}</div>
      </div>
    `;
    tableMaterias.innerHTML += addHtmlMaterias;
  }
}

showMaterias().catch(alert);