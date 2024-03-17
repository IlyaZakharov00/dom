export default class Game {
  constructor() {}

  getRandomId() {
    const allSquares = document.querySelectorAll(".square"); // поиск всех элементов square
    const randomNum = Math.ceil(Math.random() * allSquares.length); // вычисление рандомного индекса
    return randomNum;
  }

  searchGoblin() {
    let elements = document.querySelectorAll(".square"); // поиск элемента с таким индексом
    for (const elem of elements) {
      if (
        elem.firstElementChild &&
        elem.firstElementChild.classList.contains("goblin")
      ) {
        return elem.id; // возвращаем id элемента
      }
    }
  }

  deleteGoblin(id) {
    let goblinSquare = document.getElementById(id); //поиск ячейки с гоблином
    goblinSquare.firstElementChild.remove(); // удаление гоблина
  }

  createGoblin() {
    let id = this.searchGoblin(); // поиск имеющегося гоблина
    if (id) this.deleteGoblin(id); //удаление имеющего гоблина

    let randomNum = this.getRandomId(); // получение рандомного индекса
    let element = document.getElementById(randomNum); // поиск элемента с таким индексом
    do {
      randomNum = this.getRandomId();
      element = document.getElementById(randomNum);
    } while (id == element.id);
    let goblin = document.createElement("div"); // создание нового гоблина
    goblin.classList.add("goblin"); // добавляем класс новому голбину
    element.appendChild(goblin); //добавляем в ячейку нового гоблина

    goblin.addEventListener("click", () => {
      let count = document.querySelector(".counter"); // поиск счетчика
      count.textContent++; // добавление 1 к счетчику
    });

    let btnRst = document.querySelector(".button-reset");
    btnRst.addEventListener("click", () => {
      let count = document.querySelector(".counter"); // поиск счетчика
      count.textContent = 0; // обнуление счетчика
    });
  }

  moveGoblin() {
    this.createGoblin();
  }
}
