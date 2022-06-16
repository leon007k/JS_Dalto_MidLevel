"use strict";
/**
 * # .stopPropagation() - Permite que dejen de ejecutarse los demas eventos que esten asociados al dar click en este elemento
 */

/**
 * * Eventos del mouse
 * # dbclick - ocurre con un doble click
 * # mouseover - ocurre cuando el puntero se mueve sobre un elemento o uno de sus hijos
 * # mouseout - ocurre cuando se mueve el puntero fuera de un elemento o de sus elementos secundarios
 * # contextmenu - ocurre con un click derecho en el elemento
 * # mouseenter - ocurre cuando el puntero se mueve sobre un elemento
 * # mouseleave - ocurre cuando el puntero se mueve fuera de un elemento
 * # mouseup - ocurre cuando un usuario suelta un boton del mouse sobre un elemento
 * # mousemove - ocurre cuando el puntero se mueve mientras esta sobre el elemento
 */
let text = document.querySelector(".container__item--h2");
// text.addEventListener("mouseover",(e)=>{
//   alert("Estas sobre el titulo");
// });
// text.addEventListener("mouseout",(e)=>{
//   alert("Estas fuera del titulo");
// });
// text.addEventListener("contextmenu",(e)=>{
//   alert("Estas sobre el titulo");
// });

/**
 * * Eventos de teclado
 * # keydown - ocurre cuando una tecla se deja de presionar
 * # keypress - ocurre cuando una tecla se presiona
 * # onkeyup - ocurre despues de que los dos eventos anteriores hayan concluido consecutivamente
 */
let input = document.querySelector(".container__item--input");

input.addEventListener("keydown",(e) => {
  console.log("Una tecla fue presionada");
});

input.addEventListener("keypress",(e) => {
  console.log("Un usuario presiono una tecla");
})

input.addEventListener("keyup",(e) => {
  console.log("Una tecla fue soltada");
})
