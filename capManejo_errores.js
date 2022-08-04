"use strict";

// * typeof - nos dice el tipo de error
/* try{
  ASsASA
}catch(error){
  console.log(typeof error);
} */

// * finally es una condicion del try-catch que no importa que el try se cumpla, este siempre se mostrara
// * en esta funcion por ejemplo, se muestra el valor que retorna el finally ya que lo sobreescribe
/* const pruebaTry = ()=>{
  try {
    return 1;
  } catch (error) {
    return 2;
  }finally {
    return 3;
  }
};

console.log(pruebaTry()); */

// * throw - lanza una excepcion definida por el usuario
const pruebaThrow = ()=>{
  try {
    throw {
      error: "favor de revisar la conexion a la bd"
    }
  } catch (error) {
    console.log(error);
  }finally {
  }
};

console.log(pruebaThrow());