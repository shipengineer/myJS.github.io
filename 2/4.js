'use strict';

/*
Необязательное задание.
Если вам показалось домашнее задание простым, выполняем данный пункт.

Необходимо от пользователя получить целое число.
Необходимо вывести разряды числа, а именно: количество сотен, десятков и единиц.

Пример:
Пользователь ввел число 163. Программа должна вывести:
"В числе 163 количество сотен: 1, десятков: 6, единиц: 3"

Пример 2:
Пользователь ввел число 74. Программа должна вывести:
"В числе 74 количество сотен: 0, десятков: 7, единиц: 4"

Пример 3:
Пользователь ввел число 9537. Программа должна вывести:
"В числе 9537 количество сотен: 5, десятков: 3, единиц: 7"

Уточнение: Пользователь всегда вводит корректное положительное целое число.
Подсказка: Возможно, вам понадобится округление чисел и оператор %.
*/
function delimetr() {
  //получение целого числа
  let inputNumber = Number(prompt('Введите число на разложение'));
  //Проверка ввода на отрицательное и что-то, кроме цифр
  if (Number.isNaN(inputNumber) || inputNumber < 0) {
    return console.log('Неверное число');
  }
  // трансформация в строку
  let numberStringify = String(inputNumber);
  // приведение к сотням
  if (numberStringify.length > 3) {
    numberStringify = numberStringify.slice(numberStringify.length - 3);
  }
  // разложение на десятки сотни ты
  let thouthands, tens, units;
  switch (numberStringify.length) {
    case 3: {
      thouthands = String(numberStringify).slice(0, 1);
      tens = String(numberStringify).slice(1, 2);
      units = String(numberStringify).slice(2);
      break;
    }
    case 2: {
      tens = String(numberStringify).slice(0, 1);
      units = String(numberStringify).slice(1);
      break;
    }
    case 1: {
      units = String(numberStringify).slice(0);
      break;
    }
  }
  //выведение сообщение
  console.log(
    `В числе ${inputNumber} количество сотен: ${thouthands ? thouthands : 0}` +
      ` десятков: ${tens ? tens : 0}, единиц: ${units ? units : 0}`
  );
}
delimetr();
