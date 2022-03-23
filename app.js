// local dependency - use it only in this project
//npm i <packageName>

//global dependency - use in any project
//npm install -g <packageName>

//package.json -manifest file (stores important info about project/package)
//npm init (step by step)
//npm init -y (default)


const _ = require('lodash');
const items = [1, [2, [3, [4]]]];
const newItems =  _.flattenDeep(items);
console.log(newItems);