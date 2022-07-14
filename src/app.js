/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

const palo = ["♦", "♥", "♠", "♣"];
const numero = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "K",
  "Q",
  "J",
  "A"
];

function cardRamdom(array) {
  let positionRamdom = Math.floor(Math.random() * array.length);
  return array[positionRamdom];
}
const suit = document.querySelector(".palo");
const suit2 = document.querySelector(".palo2");
const number = document.querySelector(".numero");
suit.innerHTML = cardRamdom(palo);
suit2.innerHTML = suit.innerHTML;
number.innerHTML = cardRamdom(numero);

suit.classList.add("diamante");

switch (suit.innerHTML) {
  case "♦":
  case "♥":
    suit.style.color = "red";
    suit2.style.color = "red";
    number.style.color = "red";
    break;
  default:
    suit.style.color = "black";
    suit2.style.color = "black";
    number.style.color = "black";
}
