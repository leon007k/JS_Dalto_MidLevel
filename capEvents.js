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
// let input = document.querySelector(".container__item--input");

// input.addEventListener("keydown",(e) => {
//   console.log("Una tecla fue presionada");
// });

// input.addEventListener("keypress",(e) => {
//   console.log("Un usuario presiono una tecla");
// })

// input.addEventListener("keyup",(e) => {
//   console.log("Una tecla fue soltada");
// })

/**
 * * Eventos de la interfaz
 * # error - ocurre cuando se presenta un error durante la carga de un archivo multimedia
 * # load - ocurre cuando un objeto se ha cargado
 * # beforeunload - ocurre antes de que el documento este a punto de descargarse
 * # unload - ocurre una vez que se ha descargado una pagina
 * # resize - ocurre cuando se cambia el tamaño de la vista del documento
 * # scroll - ocurre cuando se desplaza la barra de desplazamiento de un elemento
 * # select - ocurre despues de que el usuario selecciona algun texto de input o textarea
 */
/* 
let img = document.querySelector(".container__item--img");
img.addEventListener("error",() => {
  console.log("ha sucedido un error al cargar la imagen");
});

addEventListener("load",() => {
  console.log("La pagina ha cargado exitosamente");
});

addEventListener("beforeunload",() => {
  console.log("estas apunto de salirte del sitio");
}); */

/* addEventListener("unload",() => {
  console.log("estas apunto de salirte del sitio");
}); */

/* addEventListener("scroll",() => {
  console.log("se ha scrolleado");
}); */
/* let input = document.querySelector(".container__item--input");
let span = document.querySelector(".container__item--p-prueba");
input.addEventListener("select",(e) => {
  let start = e.target.selectionStart;
  let end = e.target.selectionEnd;
  let textcomplete = input.value;
  span.textContent = "lo que se subdrayo es: " + textcomplete.substring(start, end);
});

input.addEventListener("keyup",(e) => {
  let key = e.key;
  span.innerHTML = `la ultima tecla apretada fue: <b>${key}</b>`;
}); */

/**
 * * Eventos de tiempo
 * # setTimeout() - establece un temporizador que ejecuta una funcion  o una porcion de codigo despues de que trasncurre el tiempo establecido
 * # clearTimeout() - borra el tiempo establecido a un setTimeout
 * # setInterval() - ejecuta una funcion o fragmento de codigo repetitivamente cada vez que termina el periodo de tiempo determinado
 * # clearInterval() - borra el intervalo creado
 */
/* const temp = setTimeout(() => {
  document.write("hola que hace");
},2000);

clearTimeout(temp); */
const temp = setInterval(() => {
  document.write("hola");
},2000);
