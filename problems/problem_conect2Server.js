"use strict";

/*
  @ cofla desea consultar en una API de la escuela cuantas personas cursan el semestre y cuantas no
  * Sistema que te permita obtener dicha informacion que requiere Cofla
  * Mostrar la inmformacion ordenadamente en el sitio web
*/
const getInfo = async () => {
  try {
    let res = await axios('studentSistem.txt');
    document.querySelector('.num-aprobados').innerHTML = res.data.aprobados;
    document.querySelector('.num-reprobados').innerHTML = res.data.reprobados;
    document.querySelector('.resultados').style.display = 'block';
  } catch (e) {
    alert('Error: ' + e.message);
  }
};

document.querySelector('#getInfo').onclick = () => { getInfo() }