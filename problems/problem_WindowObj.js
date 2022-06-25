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
const name = document.getElementById("fullName");
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
};