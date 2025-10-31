import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let quien = ["Luis", "Messen", "Angela", "Bea"];
  let accion = ["falto a", "no asistió a", "no entregó", "se fue de fiesta durante"];
  let que = ["el trabajo", "la reunión", "los informes", "sus responsabilidades"];
  let cuando = ["el finDeSemana", "el viernes", "el juernes", "el sabado", "el domingo"];

  let quienRandom = quien[Math.floor(Math.random()* quien.length)];
  let accionRandom = accion[Math.floor(Math.random()* accion.length)];
  let queRandom = que[Math.floor(Math.random()* que.length)];
  let cuandoRandom = cuando[Math.floor(Math.random()* cuando.length)];

  let excuseFinal = quienRandom + " " + accionRandom + " " + queRandom + " " + cuandoRandom;
  document.getElementById("excuse").innerHTML=excuseFinal
};
