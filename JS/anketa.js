
let name = prompt ('Ваше имя?',"");
let secondName = prompt ('Ваше отчество?',"");
let surName = prompt ('Ваша фамилия?',"");
let age = parseInt(prompt('Ваш возраст?',""));
let gender = (confirm('Ваш пол мужской?',"")) ? "мужской" : "женский";
let pension = ((gender === "мужской" && age >= 60) || (gender === "женский" && age >= 55)) ? "да" : "нет";

alert('ваше ФИО:' + ' ' + name + ' ' + secondName + ' ' + surName +
    '\nваш возраст в годах:' + ' ' + age +
    '\nваш возраст в днях:' + ' ' + age * 365 +
    '\nчерез 5 лет вам будет:' + ' ' + ( age + 5 ) +
    '\nваш пол:' + ' ' + gender +
    '\nвы на пенсии:' + ' ' + pension);
