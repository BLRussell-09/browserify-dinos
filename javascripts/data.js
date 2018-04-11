const loadDinos = require('./dinosaurs');

let dinoArray = [];

const whenDinosLoad = function () {
  dinoArray = JSON.parse(this.responseText);
  console.log(dinoArray);
};

const badDinos = function () {
  console.log('I broke.');
};

const initializer = () => {
  loadDinos(whenDinosLoad, badDinos);
};

// const getDinos = () => {
//   return dinoArray;
// };

module.exports = {
  initializer,
  getDinos,
};
