"use strict";
/*
  @ Despues de aprobar, cofla se compra una mejor computadora para poder programar mejor,
  @ y hacer todo de una forma mas optima pero necesita una resolucion optima para poder trabajarla
  # Hacer un sistema que resuelva la eleccion de una pc con los siguientes puntos para
  * Debe ser al menos full HD
  * Cuando la este por comprar, preguntarle si esta seguro de eso
*/

// let height = window.screen.availHeight;
// let width = window.screen.availWidth;
/**
 * ! screen.availHeight(availWidth) es la altura que puede tener la pantalla del browser si esta maximizada,
 * ! incluidas las barras del browser mientras que screen.height(width) basicamente es el alto total de la pantalla
*/
// height = window.screen.height;
// width = window.screen.width;

// let shop = confirm(`El alto de la pantalla es ${height} y el ancho de la pantalla es ${width}`);

// if (shop) {
//   alert("Compra realizada exitosamente");
// }else {
//   alert("Compra cancelada");
// }

/**
 * @ Cofla llega a su casa y abre una pagina y apreta F11, desde ahi se pone a navegar pero hay un problema,
 * @ como ahora esta en pantalla completa no puede ver la barra de marcadores, ni el protocolo, ni url, ni
 * @ ninguna informacion que nos puedad otorgar la interfaz que contiene la barra de busqueda
 * # Hacer un sistema que muestre los sufucientes datos como para conocer el sitio web
 */

// let pathname = window.location.pathname;
// let href = window.location.href
// let hostname = window.location.hostname;
// let protocol = window.location.protocol;

// let content = `Protocolo: <b>${protocol}</b> <br>
//                 Pathname: <b>${pathname}</b> <br>
//                 URL completa: <b>${href}</b> <br>
//                 Hostname: <b>${hostname}</b`;
// document.write(content);

/**
 * @ cofla reprobro 2 materias y ahora tiene que enviar un formulario para registrarse en la materia que debe
 * * el formulario debe contener un nombre completo, email y materia adeudada
 * * se debe validar el email, que los nombres sean reales
 * * se debe enviar al servidor de manera pulida
 */
/* const name = document.getElementById("fullName");
const email = document.getElementById("email");
const mClass = document.getElementById("class");
const submit = document.getElementById("submit");
const results = document.querySelector(".results");

submit.addEventListener("click", (e) =>{
  e.preventDefault();
  let error = validateValues();
  if (error[0]){
    results.innerHTML = "<p>" + error[1] + "</p>";
    results.classList.add("error");
    result.classList.remove("success");
  }else{
    results.innerHTML = "<p>Solicitud enviada correctamente</p>";
    results.classList.add("success");
    result.classList.remove("error");
  }
});

const validateValues = () => {
  let error = [];
  switch (true){
    case (name.value.length < 5):
      error[0] = true;
      error[1] = "El nombre no puede contener menos de 5 caracteres";
      return error;
    break;
    case (name.value.length > 40):
      error[0] = true;
      error[1] = "El nombre no puede contener mas de 40 caracteres";
      return error;
    break;
    case (email.value.length < 5 || email.value.length > 40 || email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1):
      error[0] = true;
      error[1] = "El email es invalido";
      return error;
    break;
    case (mClass.value.length < 4 || mClass.value.length > 40):
      error[0] = true;
      error[1] = "La materia no existe";
      return error;
    break;
    default:
      error[0] = false;
      return error;
    break;
  }
}; */

/**
 * @ Los datos de cofla y de otros alumnos fueron recibidos y ya estan almacenados, ahora hay que crear un sistema que muestre
 * @ esa informacion y se pueda asignar cuando rinde.
 * * La interfaz debe ser agradable y atractiva
 * * Debe contener todos los datos de manera estructurada
 * * El profesor puede seleccionar en cual de las 2 semanas rinde el usuario
 * * si el profesor confirma, los datos se deben actualizar y reemplazar el espacio de seleccion de semana por la semana elegida
 */
/* const student = [{
  name: "Carlos Andrade",
  email: "carlosandrade@gmail.com",
  matter: "Fisica 1"
},{
  name: "Leonardo Andrade",
  email: "leonardoandrade@gmail.com",
  matter: "Fisica 2"
},{
  name: "Esmeralda Ochoa",
  email: "esmeralda@gmail.com",
  matter: "Fisica 3"
},{
  name: "Gimena Andrade",
  email: "gimenaandrade@gmail.com",
  matter: "Matematicas"
}
];

const btn = document.querySelector('.btn');
let htmlCode = '';

for(let students in student){
  let data = student[students];
  let name = data["name"],
  email = data["email"],
  matter = data["matter"];
  htmlCode += `
          <div class='grid-item name'>${name}</div>
      <div class='grid-item email'>${email}</div>
      <div class='grid-item matter'>${matter}</div>
      <div class='grid-item week'>
        <select name='' id='' class='choose-week'>
          <option value='Semana 1'>Semana 1</option>
          <option value='Semana 2'>Semana 2</option>
        </select>
      </div>`;
  }

document.querySelector(".grid-container").innerHTML = htmlCode;

btn.addEventListener('click',()=>{
  let check = confirm("Estas seguro de confirmar?");
  if(check) {
    btn.remove();
    let elements = document.querySelectorAll('.week');
    let selectWeeks = document.querySelectorAll('.choose-week');
    for(let element in elements){
      let week = elements[element];
      week.innerHTML = selectWeeks[element].value;
    }
  }
}); */

// # practica para manejo de errores
/**
 * @ Las mesas de examen ya finalizaron y el profesor le tomo un ultimo examen especial a cofla, ya cofla hizo 2 pruebas mas
 * @ pero lamentablemente se rompio el sistema de inscripcion de notas, por ende habra que crear una solucion a este problema
 * @ desarrollando una pagina web que sea capas de simular su funcionamiento
 * * crear un mini sistema para introducir calificaciones
 * * Validar que no haya errores
 * * se debe promediar la calf. del profesor, con otras 2 calf. de trabajos anteriores
 * * si el promedio es mayor a 7/10, se aprobo la materia
 */
const sendButton = document.querySelector('#send-calf');

sendButton.addEventListener('click', () => {
  let prevResult, result, mensaje;
  try {
    prevResult = parseInt(document.querySelector('#calf-alumno').value);
    if (isNaN(prevResult)) {
      throw "Ha ocurrido un error";
    }
    result = verificarAprobacion(8, 9, prevResult);
    mensaje = mensajeCalificacion(prevResult);
  } catch (er) {
    result = "ingresa un valor";
    mensaje = "Favor de intentarlo de nuevo, ingresando un valor correcto";
  }

  showModal(result, mensaje);
});

function mensajeCalificacion(result) {
  let msj;
  switch (result) {
    case 1:
      msj = "REPROBADO";
      break;
    case 2:
      msj = "REPROBADO";
      break;
    case 3:
      msj = "REPROBADO";
      break;
    case 4:
      msj = "REPROBADO";
      break;
    case 5:
      msj = "REPROBADO";
      break;
    case 6:
      msj = "REPROBADO";
      break;
    case 7:
      msj = "HAS APROBADO DE SUERTE";
      break;
    case 8:
      msj = "HAS APROBADO, EXCELENTE TRABAJO";
      break;
    case 9:
      msj = "FELICIDADES, HAS APROBADO";
      break;
    case 10:
      msj = "SOBRESALIENTE, HAS APROBADO";
      break;
    default:
      msj = null;
      break;
  }
  return msj;
}

function verificarAprobacion(calf1, calf2, result) {
  let promedio = (calf1 + calf2 + result) / 3;
  if (promedio >= 7) {
    return "<span class='green'>Aprobado</span>";
  } else {
    return "<span class='red'>Reprobado</span>";
  }
}

function showModal(resultado, mensaje) {
  document.querySelector(".resultado").innerHTML = resultado;
  document.querySelector(".mensaje").innerHTML = mensaje;
  let modal = document.querySelector(".modal__background");
  modal.style.display = "flex";
  modal.style.animation = "aparecer 1s forwards";
}