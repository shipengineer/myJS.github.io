//вывод консоли на экран
console._log = console.log;
console.log = function () {
  document.querySelector('p').innerText = arguments[0];
  console._log.apply(null, arguments);
};

//подключение скрипта
let buttonScript = document.querySelectorAll('button');

buttonScript.forEach((button) => {
  {
    button.addEventListener('click', onClickHandler);
  }
});
function onClickHandler(event) {
  let scriptToRemove = document.getElementById('loaded');
  if (scriptToRemove != null) {
    scriptToRemove.parentNode.removeChild(scriptToRemove);
  }
  let script = document.createElement('script');
  script.setAttribute('src', `${event.target.classList}.js`);
  script.setAttribute('id', 'loaded');
  document.body.appendChild(script);
  console.log(`загружен сценарий №${event.target.classList}`);
}
