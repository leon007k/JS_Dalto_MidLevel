"use strict";

let data = {
  "nombre": "carlos",
  "trabajo": "front-end developer"
};

// * ejemplo de un json desserializado obtenido por el servidor
const object = { "variable1": "Pedro", "variable2": "Carlos", "variable3": "Luis" };

// * ejemplo de un json serializado para enviarlo al servidor
const obj = '{ "variable1": "Pedro", "variable2": "Carlos", "variable3": "Luis" }';
let serializado = JSON.stringify(object); // * de esta forma lo volvemos serializado para mandarlo al servidor
let deserializado = JSON.parse(obj); // * de esta forma volvemos deserializado el json recibido por el servidor

// * Permite hacer una solicitud HTTP desde Javascript
// const petition = new XMLHttpRequest();

/* 
  * Especifica los parametros principales para la peticion
  * open(method, URL, [ user, password])
  * method - metodo HTTP, usualmente GET o POST
  * URL - la URL a solicitar, una cadena, puede solicitar un objeto URL
  * user, password - para autenticacion HTTP basica
 */
// petition.open('GET', 'server.txt');

/*
  * Abre la conexion y envia la solicitud al servidor.
  * send([body])
  * el parametro body, contiene el cuerpo de la solicitud
*/
//petition.send();

/*
  * onload - cuando la solicitud esta completa incluso sea erronea, la respuesta se descarga por completo
  * error - cuando la solicitud no pudo ser realizada satisfactoriamente
  * progress - se dispara periodicamente mientras la respuesta esta siendo descargada.
*/
/* petition.onload = () => {
  if (petition.status === 200) {
    console.log(petition.response);
  } else {
    console.log(`Error ${petition.status}: ${petition.statusText}`);
  }
} */

// # Ejemplo de peticion con POST
// petition.open('POST', 'https://reqres.in/api/users');

/*
  * XMLHTTPREQUEST permite tanto enviar cabezeras personalizadas como leer cabeceras de la respuesta
  * Existen 3 metodos - 
  * content-type: application/xml; charset=utf-8, X-Auth 123 y X-Auth 456
  * setRequestHeader(name, value) - enviamos la cabezera
  * getResponseHeader - obtiene la cabecera de la respuesta con el name dado
*/
/* petition.setRequestHeader('Content-Type', 'application/json;charset=UTF8');


petition.send(JSON.stringify(data));

petition.onload = () => {
  if (petition.status === 200 || petition.status === 201) {
    console.log(JSON.parse(petition.response).nombre);
  } else {
    console.log(`Erro ${petition.status}: ${petition.statusText}`);
  }
}; */

// # Uso del fetch para solicitudes HTTP desde javascript
/* 
  * fetch(url , [options])
  * url - representa la direccion URL a la que deseamos acceder
  * options - representan los parametros opcionales, puede ser un metodo o los encabezados de la peticion, etc
  * Si no especificamos ningun options, se ejecutara una simple peticion GET
  * fetch, te devuelve la peticion en forma de una promesa
  * ok - booleana, true si el codigo de estado HTTP es 200 a 299
  * Response provee multiples metodos
  * .text() - lee y devuelve la respuesta en formato de texto
  * .json() - convierte la respuesta a un JSON
  * .blob() - devuelve la respuesta como datos binarios tipados
*/

// # EJEMPLO CON GET
/* fetch('https://reqres.in/api/users/2')
  .then(res => res.json())
  .then(res => console.log(res.data)); */

// # EJEMPLO CON POST
fetch('https://reqres.in/api/users', {
  method: 'POST',
  headers: { 'content-type': 'application/json; charset=utf-8' },
  boody: JSON.stringify(data)
})
  .then(res => res.json())
  .then(res => console.log(res));