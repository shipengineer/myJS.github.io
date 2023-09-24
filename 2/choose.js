function script(scriptNumber) {
  let scriptToRemove = document.getElementById('loaded');
  if (scriptToRemove != null) {
    scriptToRemove.parentNode.removeChild(scriptToRemove);
  }

  let script = document.createElement('script');
  script.setAttribute('src', `${scriptNumber}.js`);
  script.setAttribute('id', 'loaded');
  document.body.appendChild(script);
}
