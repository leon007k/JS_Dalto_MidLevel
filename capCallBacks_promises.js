"uses strict";

/**
 * #CALLBACKS
 * * Es una funcion que se pasa como argumento a otra funcion. Permite que una funcion, llame a otra funcion.
 * * Estas funciones se ejecutan en la secuencia en que se llaman
 */

/* function showName(callback) {
  callback("Leonardo");
}

showName(name => console.log(name)); */

/* 
  * En el ejemplo siguiente, se muestra un caso donde se hace un uso de varios callbacks, demostrando como cada vez se usan
  * mas if-else para el uso de otro callback, validando los datos que se reciben. Por ello, es mejor usar promesas 
*/
class Person {
  constructor(name, instagram) {
    this.name = name;
    this.instagram = instagram;
  }
}

const data = [
  ['Leonardo Andrade', '@leoandradelopez'],
  ['Gimena Andrade', '@gimenaandradelopez'],
  ['Esmeralda Ochoa', '@esmeralda8az'],
];

const people = [];

for (let i = 0; i < data.length; i++) {
  people[i] = new Person(data[i][0], data[i][1]);
}

/*const getPeople = (id, cb) => {
  if (people[id] === undefined) {
    cb('No se ha encontrado la persona');
  } else {
    cb(null, people[id], id);
  }
};

const getInstagram = (id, cb) => {
  if (people[id].instagram === undefined) {
    cb('No se ha encontrado el instagram');
  } else {
    cb(null, people[id].instagram);
  }
};

getPeople(0, (err, people, id) => {
  if (err) {
    console.log(err);
  } else {
    console.log(people.name);
    getInstagram(id, (err, instagram) => {
      if (err) {
        console.log(err);
      } else {
        console.log(instagram);
      }
    });
  }
}); */

/**
 * # Promise
 * * objeto especial de Jscript, que permite ejecutar un pedazo de codigo, y cuando este listo, nos devuelve los datos
 * * Permite asociar controladores con el valor eventual de exito o el motivo de falla de una accion asincrona
 * * esto permite que los metodos asicronos devuelvan valores como los metodos sincronos: en lugar de devolver
 * * inmediatamente el valor final, el metodo asincrono devuele la promesa a proporcionar el valor en algun momento
 * * del futuro.
 * * pending - estado inicial, ni cumplido ni rechazado
 * * fulfilled - lo que significa que la operacion se cumplio con exito
 * * rejected - lo que significa que la operacion fallo
 */

/* let name = "Leonardo";

const promise = new Promise((resolve, reject) => {
  // * Llamamos a resolve(...) cuando lo que estábamos haciendo de forma
  // * asíncrona fue exitoso, y reject(...) cuando falló.
  if (name !== "Leonardo") {
    reject("Lo siento, el nombre no es Leonardo");
  } else {
    resolve(name);
  }
});

promise.then(resultado => {
  // * then nos permitira obtener lo que hayamos pasado en resolve
  console.log(resultado);
}).catch(err => {
  // * catch nos permitira obtener lo que hayamos pasado en reject
  console.log(err);
}); */

/* const getPeople = (id) => {
  return new Promise((resolve, reject) => {
    if (people[id] === undefined) {
      reject("No se encontro esta persona");
    } else {
      resolve(people[id].name);
    }
  });
};

const getInstagram = (id) => {
  return new Promise((resolve, reject) => {
    if (people[id].instagram === undefined) {
      reject("No se encontro el instagram");
    } else {
      resolve(people[id].instagram);
    }
  });
}

let id = 2;

getPeople(id).then(name => {
  console.log(name);
  return getInstagram(id);
}).then(instagram => {
  console.log(instagram);
}).catch(err => {
  console.log(err);
}); 

*/

// # trabajar funciones asincronas y sincronas
// * es una forma especial de trabajar con las promesas
// * para poder hacer uso del await, es necesario que la funcion se declare como asincrona.

const object = {
  propiedad1: "valor1",
  propiedad2: "valor2",
  propiedad3: "valor3",
};

const getInformation = async () => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(object);
    }, 3000);
  });

  let data = await promise;

  console.log(data);
}

getInformation();


