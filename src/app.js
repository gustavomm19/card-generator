/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const getRandom = arr => {
  let i = Math.floor(Math.random() * arr.length);
  return arr[i];
};

window.onload = function() {
  //write your code here
  const symbols = ["♦", "♥", "♠", "♣"];
  const numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const colors = ["red", "black"];
  console.log("Hello Rigo from the console!");

  const selectedSymbol = getRandom(symbols);
  const selectedColor = getRandom(colors);
  const selectedNumber = getRandom(numbers);

  const sym = document.getElementsByClassName("p-symbol");

  for (var i = 0; i < sym.length; i++) {
    sym[i].appendChild(document.createTextNode(selectedSymbol));
    sym[i].classList.add(selectedColor);
  }

  const number = document.getElementById("number");
  number.appendChild(document.createTextNode(selectedNumber));
};
