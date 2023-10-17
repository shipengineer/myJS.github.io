'use strict';

/*
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/
for (let i = 0; i < 11; i++) {
  //условия нуль
  if (i === 0) {
    console.log('0 - это ноль');
    continue;
  }
  //условия чет - нечет
  //известно, что 0 и 1 будут типизированы в boolean в false и true соответственно
  if (i % 2) {
    console.log(`${i} - нечетное число`);
  } else {
    console.log(`${i} - четное число`);
  }
}
console.log(console.value);