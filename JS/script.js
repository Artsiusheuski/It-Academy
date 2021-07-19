
let name = prompt ('Ваше имя?');
let secondName = prompt ('Ваше отчество?');
let surName = prompt ('Ваша фамилия?');
let age = parseInt(prompt('Ваш возраст?'));
let gender = confirm ('Ваш пол мужской?');
let pension;

if(gender) {
   gender = ('мужской');
} else {
   gender = ('женский');
} 
if (age >=60) {
   pension = 'да';
} else {
   pension = 'нет';
}

alert('ваше ФИО:' + ' ' + name + ' ' + secondName + ' ' + surName +
'\nваш возраст в годах:' + ' ' + age +
'\nваш возраст в днях:' + ' ' + ( age * 365 ) +
'\nчерез 5 лет вам будет:' + ' ' + ( age + 5 ) +
'\nваш пол:' + ' ' + gender +
'\nвы на пенсии:' + ' ' + pension);
