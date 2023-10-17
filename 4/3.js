'use strict';

/*
Используя Math.random() необходимо сгенерировать массив, содержащий 5 цифр в 
диапазоне [0, 9].
После создания массива необходимо вывести в консоль следующие значения:
1. Сумму элементов массива
2. Минимальное значение в массиве
3. Новый массив, содержащий индексы сгенерированного выше массива, в которых 
значение равно 3.
Пример: Если у нас сгенерировался массив [2, 3, 5, 7, 3], то мы должны вывести 
в консоль массив [1, 4]. Такой массив получился потому что в сгенерированном
массиве тройки лежат под индексами 1 и 4. Если троек в сгенерированном массиве
не окажется, значит нужно будет вывести пустой массив.
*/
function script() {
  const randomArray = [];
  //для контрольной проверки
  // randomArray.push(3);
  for (let i = 0; i < 10; i++) {
    randomArray.push(Math.floor(Math.random() * 9));
  }
  const sum = randomArray.reduce((acc, elem) => acc + elem);

  const minimal = Math.min(...randomArray);

  const newArray = randomArray.reduce(function (acc = [], elem, index) {
    if (elem === 3) {
      acc.push(index);
    }
    return acc;
  }, []);

  console.log(`Получился массив => [${randomArray}]`);
  console.log(`Cумма всех элементов =>  ${sum}`);
  console.log(`Минимальное значение =>  ${minimal}`);
  console.log(
    `Массив индексов вхождений тройки => [${
      newArray.length === 0 ? 'нету троек' : newArray
    }]`
  );
}
script();
