"use strict";

let data = {
  "nombre": "carlos",
  "trabajo": "front-end developer"
};

// # Ejemplo con GET
axios("server.txt")
  .then(res => console.log(res.data));

// # Ejemplo con POST
// * si agregamos el metodo post, el primer parametro lo tomara como url y el segundo las url
// * si no lo agregamos, tomara el segundo parametro como las configuraciones y seria metodo GET
axios.post("https://reqres.in/api/users", data)
  .then(res => console.log(res.data));