const loadDinos = (iload, ifail) => {
  const myRequest = new XMLHttpRequest();
  myRequest.addEventListener('load', iload);
  myRequest.addEventListener('error', ifail);
  myRequest.open('Get', './db/dinosaurs.json');
  myRequest.send();
};

module.exports = loadDinos;
