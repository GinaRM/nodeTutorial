
// node uses CommonJS, every file is a module by default
//modules we only share the minimun, encapsulated code

const names = require ('./4-names');
const sayHi = require ('./5-utils');
const alternative = require ('./6-alternative-flavor');
require ('./7-mind-granade')


sayHi(names.gina);
sayHi(names.peter);

sayHi(alternative.items);
sayHi(alternative.siglePersone.name + ' You are ' + alternative.siglePersone.age);

