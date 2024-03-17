import "./css/style.css";
import Game from "./js/app";

document.addEventListener("DOMContentLoaded", () => {
  console.log("загружено");

  const newGame = new Game(); // создание новой игры

  let count = document.querySelector(".counter"); // поиск счетчика
  count.textContent = 0; //установка счетчика на 0

  let timer = setInterval(() => {
    newGame.moveGoblin();
  }, 1000);
});

// Точка входа webpack
// Не пишите код в данном файле
