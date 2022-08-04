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
  }
];

const getMateria = async (id) => {
  let solicitud = new Promise((resolve, reject) => {
    let materia = materias[id];
    if (materia === undefined) {
      reject("No se encontro la materia");
    } else {
      setTimeout(() => {
        resolve(materia);
      }, Math.random() * 400);
    }
  });


  let res = await solicitud;

  console.log(res);
};

getMateria(1).catch(alert);