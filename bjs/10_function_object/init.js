window.onload = clean();

const startGeneration = document.querySelector("#button-start");
startGeneration.addEventListener("click", start);

const cleanText = document.querySelector("#button-clear");
cleanText.addEventListener("click", clean);

function start() {
  const initPerson = personGenerator.getPerson();
  document.querySelector("#firstNameOutput").innerText = initPerson.firstName;
  document.querySelector("#surnameOutput").innerText = initPerson.surnameJson;
  document.querySelector("#genderOutput").innerText = initPerson.gender;
  document.querySelector("#birthYearOutput").innerText = initPerson.birthYear;
  document.querySelector("#birthDateOutput").innerText = initPerson.birthDate;
  document.querySelector("#birthMonthOutput").innerText = initPerson.birthMonth;
  document.querySelector("#fpatronymic").innerText = initPerson.fpatronymic;
  document.querySelector("#profession").innerText = initPerson.profession;
}

function clean() {
  document.querySelector("#firstNameOutput").innerText = "";
  document.querySelector("#surnameOutput").innerText = "";
  document.querySelector("#genderOutput").innerText = "";
  document.querySelector("#birthYearOutput").innerText = "";
  document.querySelector("#birthDateOutput").innerText = "";
  document.querySelector("#birthMonthOutput").innerText = "";
  document.querySelector("#fpatronymic").innerText = "";
  document.querySelector("#profession").innerText = "";
}
