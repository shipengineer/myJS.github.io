'use strict';

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/
function script() {
  function result(num) {
    console.log(`обрабатываю число ${num}`);
    console.log('Функция куба запущена...');
    console.log(`Куб вашего числа ${num ** 3}`);
  }
  result(prompt('введите число для обработки кубической функцией'));
}
script();
