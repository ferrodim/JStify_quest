let {isValueExistsInTree1, isValueExistsInTree2, isValueExistsInTree3} = require('./index.js');

const arr1 = [3, [8, [5, null, null],null], [7, null, null]];

// let isValueExistsInTree = isValueExistsInTree1;
//let isValueExistsInTree = isValueExistsInTree2;
let isValueExistsInTree = isValueExistsInTree3;

console.log(isValueExistsInTree(arr1, 3));
console.log(isValueExistsInTree(arr1, 9));
console.log(isValueExistsInTree(arr1, 51));
