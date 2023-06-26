let minValue;
let maxValue;

const modalEl = document.getElementById("exampleModal");
const modal = new bootstrap.Modal(modalEl);
modal.show();

const saveValueBtn = document.getElementById("saveValueBtn");
saveValueBtn.onclick = function () {
  minValue = parseInt(document.getElementById("inputValueMin").value);
  maxValue = parseInt(document.getElementById("inputValueMax").value);
  minValue = minValue < -999 ? -999 : minValue;
  maxValue = maxValue > 999 ? 999 : maxValue;
  modal.hide();

  const modalEl1 = document.getElementById("exampleModal1");
  const modal1 = new bootstrap.Modal(modalEl1);
  modal1.show();
  const close1 = document.querySelector("#close");
  const alert = document.querySelector("#alert");
  alert.innerText = `Загадайте любое число от ${minValue} до ${maxValue}?`;
  close1.onclick = function () {
    modal1.hide();
  };

  let answerNumber = Math.floor((minValue + maxValue) / 2);
  let orderNumber = 1;
  let gameRun = true;
  let hundreds = [
    "",
    "сто",
    "двести",
    "триста",
    "четыреста",
    "пятьсот",
    "шестьсот",
    "семьсот",
    "восемьсот",
    "девятьсот",
  ];
  let dozens = [
    "",
    "надцать",
    "двадцать",
    "тридцать",
    "сорок",
    "пятьдесят",
    "шестьдесят",
    "семьдесят",
    "восемьдесят",
    "девяносто",
  ];
  let units = [
    "",
    "один",
    "два",
    "три",
    "четыре",
    "пять",
    "шесть",
    "семь",
    "восемь",
    "девять",
  ];

  const orderNumberField = document.querySelector("#orderNumberField");
  const answerField = document.querySelector("#answerField");

  orderNumberField.innerText = orderNumber;
  const phraseRandom = Math.round(Math.random() * 3);
  answerField.innerText = `${textQuestion()} ${answerNumber}?`;

  document.querySelector("#btnRetry").addEventListener("click", function () {
    const modalEl = document.getElementById("exampleModal");
    const modal = new bootstrap.Modal(modalEl);
    modal.show();

    const saveValueBtn = document.getElementById("saveValueBtn");
    saveValueBtn.onclick = function () {
      minValue = parseInt(document.getElementById("inputValueMin").value);
      maxValue = parseInt(document.getElementById("inputValueMax").value);
      minValue = minValue < -999 ? -999 : minValue;
      maxValue = maxValue > 999 ? 999 : maxValue;
      modal.hide();

      const modalEl1 = document.getElementById("exampleModal1");
      const modal1 = new bootstrap.Modal(modalEl1);
      modal1.show();
      const close1 = document.querySelector("#close");
      const alert = document.querySelector("#alert");
      alert.innerText = `Загадайте любое число от ${minValue} до ${maxValue}?`;
      close1.onclick = function () {
        modal1.hide();
      };
      orderNumber = 1;
      answerNumber = (minValue + maxValue) / 2;
      gameRun = true;
      orderNumberField.innerText = orderNumber;
      answerField.innerText = `${textQuestion()} ${answerNumber}?`;
    };
  });

  document.querySelector("#btnOver").addEventListener("click", function () {
    if (gameRun) {
      if (minValue === maxValue) {
        const phraseRandom = Math.round(Math.random());
        const answerPhrase =
          phraseRandom === 1
            ? `Вы загадали неправильное число!\n\u{1F914}`
            : `Я сдаюсь..\n\u{1F92F}`;
        answerField.innerText = answerPhrase;
        gameRun = false;
      } else {
        minValue = answerNumber + 1;
        answerNumber = Math.round((minValue + maxValue) / 2);
        orderNumber++;
        orderNumberField.innerText = orderNumber;
        const res = go(Math.abs(answerNumber));
        if (res.length < 20) {
          if (answerNumber <= 0) {
            answerField.innerText = `${textQuestion()} минус ${res}?`;
          } else {
            answerField.innerText = `${textQuestion()} ${res}?`;
          }
        } else {
          answerField.innerText = `${textQuestion()} ${answerNumber}?`;
        }
      }
    }
  });

  document.querySelector("#btnLess").addEventListener("click", function () {
    if (gameRun) {
      if (minValue === maxValue) {
        const phraseRandom = Math.round(Math.random());
        const answerPhrase =
          phraseRandom === 1
            ? `Вы загадали неправильное число!\n\u{1F914}`
            : `Я сдаюсь..\n\u{1F92F}`;
        answerField.innerText = answerPhrase;
        gameRun = false;
      } else {
        maxValue = answerNumber - 1;
        answerNumber = Math.round((minValue + maxValue) / 2);
        orderNumber++;
        orderNumberField.innerText = orderNumber;
        const res = go(Math.abs(answerNumber));
        if (res.length < 20) {
          if (answerNumber < 0) {
            answerField.innerText = `${textQuestion()} минус ${res}?`;
          } else {
            answerField.innerText = `${textQuestion()} ${res}?`;
          }
        } else {
          answerField.innerText = `${textQuestion()} ${answerNumber}?`;
        }
      }
    }
  });

  document.querySelector("#btnEqual").addEventListener("click", function () {
    if (gameRun) {
      const randomNumber = Math.round(Math.random() * 3);
      if (randomNumber === 0) {
        answerField.innerText = `Я всегда угадываю\n\u{1F60E}`;
      } else if (randomNumber === 1) {
        answerField.innerText = `А я неплох...\n\u{1F920}`;
      } else if (randomNumber === 2) {
        answerField.innerText = `Я знал с самого начала\n\u{1F920}`;
      } else {
        answerField.innerText = `Мог бы что-то посложнее загадть\n\u{1F4AA}`;
      }
      gameRun = false;
    }
  });

  function textQuestion() {
    let phraseRandom1 = Math.round(Math.random() * 3);
    let text;
    if (phraseRandom1 === 0) {
      text = "Вы загадали число ";
    } else if (phraseRandom1 === 1) {
      text = "Вероятно это ";
    } else if (phraseRandom1 === 2) {
      text = "Ну, наверное, это число ";
    } else {
      text = "Знаю, знаю, это число ";
    }
    return text;
  }

  function go(res) {
    let s = "";
    let d = "";
    let e = "";
    let n = String(res);

    if (n >= 100) {
      s = hundreds[n[n.length - 3]] + " ";
    }

    if (n >= 10) {
      d = dozens[n[n.length - 2]] + " ";
    }

    e = units[n[n.length - 1]];

    if (n >= 11 && n <= 19) {
      return s + e + d;
    } else {
      return s + d + e;
    }
  }
};
