"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiply = exports.normalize = void 0;
function normalize(rates) {
    let sum = 0;
    let result = [];
    for (let value of rates)
        sum += value;
    for (let value of rates)
        result.push(value / sum);
    return result;
}
exports.normalize = normalize;
function multiply(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++)
        result.push(arr1[i] * arr2[i]);
    return result;
}
exports.multiply = multiply;
//# sourceMappingURL=ArrayTools.js.map