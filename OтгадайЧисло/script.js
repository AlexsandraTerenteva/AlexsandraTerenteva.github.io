window.addEventListener("DOMContentLoaded", () => {
  let randomNumber = Math.floor(Math.random() * 100) + 1,
    arrayResult = [],
    trycounter = 0,
    resultButton;
  const number = document.querySelector(".number"),
    btn = document.querySelector(".btn"),
    result = document.querySelector(".result"),
    guesses = document.querySelector(".guesses"),
    gameResult = document.querySelector(".gameResult"),
    lowOrHi = document.querySelector(".lowOrHi");

  function createRandomNumber() {
    if (number.value === "") {
      lowOrHi.textContent = "Введите число!";
    } else {
      let value = +number.value;
      arrayResult.push(value);

      if (value === randomNumber) {
        guesses.textContent = "Отгадали";
        guesses.style.backgroundColor = "green";
        lowOrHi.textContent = "";
        getResult();
      }
      if (trycounter >= 10) {
        guesses.textContent = "Попытки исчерпаны!";
        guesses.style.backgroundColor = "red";
        lowOrHi.textContent = "";
        getResult();
      }
      if (value > randomNumber) {
        lowOrHi.textContent = "Слишком много!";
      }
      if (value < randomNumber) {
        lowOrHi.textContent = "Слишком мало!";
      }

      trycounter++;
      number.value = "";
      console.log(trycounter);
    }
  }

  function getResult() {
    number.disabled = true;
    btn.disabled = true;
    guesses.textContent = `Ваши попытки: ${arrayResult}`;
    resultButton = document.createElement("button");
    resultButton.textContent = "Начать заново!";
    result.appendChild(resultButton);
    resultButton.addEventListener("click", createNewGame);
  }

  function createNewGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    arrayResult = [];
    trycounter = 1;
    number.disabled = false;
    btn.disabled = false;
    gameResult.textContent = "";
    guesses.textContent = "";
    number.value = "";
    result.removeChild(resultButton);
    number.focus();
  }

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    createRandomNumber();
  });
  number.addEventListener("input", (e) => {
    e.target.value = e.target.value.replace(/[^\d]/g, "");
  });
});
