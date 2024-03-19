export default class Game {
  constructor() {
    this.clickedOnGoblin = null;
    this.goblin = null;
    this.lose = false;
    this.stop = false;
    this.timer;
    this.field = null;
  }

  generateSquare(number) {
    if (number <= 1 || !Number.isInteger(Number(number))) {
      return alert(
        "Невозможно отрисовать поле! Пожалуйста, введите другое число."
      );
    }

    let container = document.createElement("div"); // создание div
    let countContiner = document.querySelector(".count-container"); // поиск контейнера с кнопками
    countContiner.after(container); // вставка контейнера после кнопок
    container.classList.add("container"); // добавление контейнеру класса
    for (let i = 1; i <= number ** 2; i++) {
      let example = `<div class="square" id=${i}></div>`; // шаблон строки
      container.insertAdjacentHTML("beforeend", example); //добавление в контейнер ячейки
    }
    this.field = true;
  }

  getRandomId() {
    const allSquares = document.querySelectorAll(".square"); // поиск всех элементов square
    const randomNum = Math.ceil(Math.random() * allSquares.length); // вычисление рандомного индекса
    return randomNum; //возвращаем рандомное число
  }

  searchGoblin() {
    if (this.goblin) return this.goblin.parentElement.id; //если есть гоблин то возвращаем id у родителя
  }

  deleteGoblin(id) {
    let goblinSquare = document.getElementById(id); //поиск ячейки с гоблином
    goblinSquare.firstElementChild.remove(); // удаление гоблина
  }

  createGoblin() {
    this.lose = false;
    let message = document.querySelector(".message-link");
    message.classList.add("hidden");

    if (this.goblin) {
      // если есть гоблин записываем что клика не было
      this.clickedOnGoblin = false;
    }

    let id = this.searchGoblin(); // поиск имеющегося гоблина
    if (id) this.deleteGoblin(id); // удаление имеющегося гоблина

    let randomNum = this.getRandomId(); // получение рандомного индекса
    let element = document.getElementById(randomNum); // поиск элемента с таким индексом

    do {
      // ищем рандомное число до тех пор пока оно совпадает с предыдущем id
      randomNum = this.getRandomId();
      element = document.getElementById(randomNum);
    } while (id == element.id);

    this.goblin = document.createElement("div"); // создание нового гоблина
    this.goblin.classList.add("goblin"); // добавляем класс новому голбину
    element.appendChild(this.goblin); //добавляем в ячейку нового гоблина

    if (this.clickedOnGoblin == false) {
      //если не было клика по гоблину
      let count = document.querySelector(".counter-false"); // поиск счетчика
      count.textContent++; // добавление 1 к счетчику
      if (count.textContent == 5) {
        clearInterval(this.timer);
        this.lose = true;
        alert("Вы проиграли! Начните новую игру.");
      }
    }

    this.goblin.addEventListener("click", () => {
      if (this.lose) {
        return;
      }
      if (!this.stop) {
        // если был клик по гоблину
        this.clickedOnGoblin = true;
        let count = document.querySelector(".counter-click"); // поиск счетчика
        count.textContent++; // добавление 1 к счетчику
        let id = this.searchGoblin(); // поиск имеющегося гоблина
        this.deleteGoblin(id); // удаление имеющегося гоблина
        this.goblin = false; // нет гоблина
      }
    });
  }

  moveGoblin() {
    this.createGoblin();
  }
}
