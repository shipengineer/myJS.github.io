'use strict';

/*
Необходимо переписать данный код, используя тернарный оператор.
Если есть какие-либо недочеты в коде, можете их исправить.
*/
// let test = confirm('У вас много денег?')
// if (test === true) {
//   console.log('Скоро будем у вас ;)');
// } else {
//   console.log('До свидания.');
// }
let test = confirm('У вас много денег?')
  ? console.log('Скоро будем у вас ;)')
  : console.log('До свидания.');
console.log(test); // expected : undefined (мне не нравится, порчу вводные)

// Это, мне кажется ,лучше. Не портит вводные
test ? console.log('Скоро будем у вас ;)') : console.log('До свидания.');
