const personGenerator = {
  surnameJson: `{  
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
  firstNameMaleJson: `{
        "count": 9,
        "list": {     
            "id_1": "Александр",
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
  firstNameFemaleJson: `{
        "count": 9,
        "list": {     
            "id_1": "Елена",
            "id_2": "Оксана",
            "id_3": "Ирина",
            "id_4": "Марина",
            "id_5": "Полина",
            "id_6": "Олеся",
            "id_7": "Диана",
            "id_8": "Дарья",
            "id_9": "Светлана",
            "id_10": "Мария"
        }
    }`,
  professionNameMen: `{
    "count": 9,
    "list": {     
        "id_1": "Шахтер",
        "id_2": "Солдат",
        "id_3": "Инженер",
        "id_4": "Повар",
        "id_5": "Слесарь",
        "id_6": "Гидравлик",
        "id_7": "Крановщик",
        "id_8": "Стропальщик",
        "id_9": "Шофёр",
        "id_10": "Учитель"
    }
}`,
  professionNameWomen: `{
  "count": 9,
  "list": {     
      "id_1": "Визажист",
      "id_2": "Пианист",
      "id_3": "Инженер",
      "id_4": "Повар",
      "id_5": "Нянечка",
      "id_6": "Гидравлик",
      "id_7": "Крановщик",
      "id_8": "Парикмахер",
      "id_9": "Шофёр",
      "id_10": "Учитель"
  }
}`,
  monthsGroup28: `{
  "count": 11,
  "list": {     
    "id_1": "января",
    "id_2": "февраля",
    "id_3": "марта",    
    "id_4": "апреля",
    "id_5": "мая",
    "id_6": "июня",
    "id_7": "июля",
    "id_8": "августа",
    "id_9": "сентября",
    "id_10": "октября",
    "id_11": "ноября",
    "id_12": "декабря"
  }
}`,
  monthsGroup30: `{
  "count": 10,
  "list": { 
    "id_1": "января",
    "id_2": "марта",    
    "id_3": "апреля",
    "id_4": "мая",
    "id_5": "июня",
    "id_6": "июля",
    "id_7": "августа",
    "id_8": "сентября",
    "id_9": "октября",
    "id_10": "ноября",
    "id_11": "декабря"
  }
}`,
  monthsGroup31: `{
  "count": 7,
  "list": {     
    "id_1": "января",
    "id_2": "марта",
    "id_3": "мая",
    "id_4": "июля",
    "id_5": "августа",
    "id_6": "октября",
    "id_7": "декабря"
  }
}`,

  GENDER_MALE: "Мужчина",
  GENDER_FEMALE: "Женщина",

  randomGender: function () {
    return this.randomIntNumber() === 1 ? this.GENDER_FEMALE : this.GENDER_MALE;
  },

  randomIntNumber: (max = 1, min = 0) =>
    Math.floor(Math.random() * (max - min + 1) + min),

  randomValue: function (json) {
    const obj = JSON.parse(json);
    const prop = `id_${this.randomIntNumber(obj.count, 1)}`; // this = personGenerator
    return obj.list[prop];
  },

  randomFirstName: function () {
    if (this.person.gender === this.GENDER_MALE) {
      return this.randomValue(this.firstNameMaleJson);
    } else {
      return this.randomValue(this.firstNameFemaleJson);
    }
  },

  randomSurname: function () {
    if (this.person.gender === this.GENDER_MALE) {
      this.firstNameMaleJson;
      return this.randomValue(this.surnameJson);
    } else {
      return this.randomValue(this.surnameJson) + "а";
    }
  },

  birthYear: function () {
    return this.randomIntNumber(1970, 2000) + "г.";
  },

  fpatronymic: function () {
    let fpatronymic = this.randomValue(this.firstNameMaleJson);
    let lastLetter = fpatronymic.slice(-1);
    if (this.person.gender === this.GENDER_MALE) {
      if (lastLetter == "й") {
        return fpatronymic.replace("й", "евич");
      } else if (lastLetter == "а") {
        return fpatronymic.replace("а", "ич");
      } else {
        return fpatronymic + "ович";
      }
    } else {
      if (lastLetter == "й") {
        return fpatronymic.replace("й", "евна");
      } else if (lastLetter == "а") {
        return fpatronymic.replace("а", "ична");
      } else {
        return fpatronymic + "овна";
      }
    }
  },

  profession: function () {
    if (this.person.gender === this.GENDER_MALE) {
      return this.randomValue(this.professionNameMen);
    } else {
      return this.randomValue(this.professionNameWomen);
    }
  },

  birthMonth: function () {
    if (this.person.birthDate <= 28) {
      return this.randomValue(this.monthsGroup28);
    } else if (this.person.birthDate <= 30) {
      return this.randomValue(this.monthsGroup30);
    } else if (this.person.birthDate <= 31) {
      return this.randomValue(this.monthsGroup31);
    }
  },

  birthDate: function () {
    return this.randomIntNumber(31, 1);
  },

  getPerson: function () {
    this.person = {};
    this.person.gender = this.randomGender();
    this.person.firstName = this.randomFirstName();
    this.person.surnameJson = this.randomSurname();
    this.person.birthYear = this.birthYear();
    this.person.birthDate = this.birthDate();
    this.person.birthMonth = this.birthMonth();
    this.person.fpatronymic = this.fpatronymic();
    this.person.profession = this.profession();

    return this.person;
  },
};
