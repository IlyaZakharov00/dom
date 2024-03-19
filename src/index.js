import "./css/style.css";
import Game from "./js/app";

document.addEventListener("DOMContentLoaded", () => {
  console.log("загружено");

  const newGame = new Game(); // создание новой игры

  let inputSquare = document.querySelector(".input-text"); // поиск формы

  let inputSubmit = document.querySelector(".input-submit"); // поиск кнопки отправки формы
  inputSubmit.addEventListener("click", (e) => {
    //отслеживаем нажатие на отправку
    e.preventDefault();
    if (newGame.field) {
      //если генерация поля уже была ранее
      let container = document.querySelector(".container"); // ищем контейнер
      container.remove(); // удаляем его
    }
    newGame.generateSquare(inputSquare.value); // генерация поля
  });

  let message = document.querySelector(".message-link"); // сообщение

  message.addEventListener("click", (e) => {
    message.classList.add("hidden");
  });

  newGame.btnNewGame = document.querySelector(".btn-new-game"); // поиск конпки новая игра
  newGame.btnNewGame.addEventListener("click", () => {
    //если нажали на кнопку новая игра

    let id = newGame.searchGoblin(); // поиск имеющегося гоблина
    if (id) newGame.deleteGoblin(id); // удаление имеющегося гоблина
    newGame.goblin = null; // удаляем запись о гоблине

    let countClick = document.querySelector(".counter-click"); // поиск счетчика
    let countFalse = document.querySelector(".counter-false"); // поиск счетчика
    countClick.textContent = 0; // обнуление счетчика
    countFalse.textContent = 0; // обнуление счетчика
    if (newGame.timer) clearInterval(newGame.timer); //удаляем запущенный таймер
    newGame.timer = setInterval(() => {
      // запускаем новый таймер
      newGame.moveGoblin();
    }, 1200);
  });

  newGame.btnStop = document.querySelector(".btn-stop-game"); // поиск конпки остановки
  newGame.btnStop.addEventListener("click", () => {
    //если нажали на кнопку остановки
    if (newGame.timer) clearInterval(newGame.timer); //удаляем запущенный таймер
    message.classList.remove("hidden");
    let msg = document.querySelector(".message");
    msg.textContent = "Игра остановлена";
    newGame.stop = true;
  });

  newGame.btnContinue = document.querySelector(".btn-continue"); // поиск конпки продолжения
  newGame.btnContinue.addEventListener("click", () => {
    //если нажали на кнопку стоп
    if (newGame.stop && !newGame.lose) {
      newGame.stop = false;
      newGame.timer = setInterval(() => {
        // запускаем новый таймер
        newGame.moveGoblin();
        newGame.clickedOnGoblin = false;
      }, 1200);
    }
  });
});

// Точка входа webpack
// Не пишите код в данном файле
