// variant 1: simple
function isValueExistsInTree1(a, n){
    return Array.isArray(a) ? a.some(e => isValueExistsInTree1(e, n)): a===n;
}

// variant 2: faster and a bit readable
function isValueExistsInTree2(arr, needle){
    let [num, arrLeft, arrRight] = arr;
    return (num === needle)
        || (!!arrLeft && isValueExistsInTree2(arrLeft, needle))
        || (!!arrRight && isValueExistsInTree2(arrRight, needle));
}

// variant 3: short code
let isValueExistsInTree3=(a,n)=>RegExp(`\\b${n}\\b`).test(a);

module.exports = {isValueExistsInTree1, isValueExistsInTree2, isValueExistsInTree3};