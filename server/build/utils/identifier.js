"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createIdentifier = exports.limitStringToSizeNine = void 0;
var nineDigitsMultiplier = 10e8;
function createRandomNumber() {
    return Math.floor(Math.random() * nineDigitsMultiplier);
}
function limitStringToSizeNine(identifier) {
    if (identifier.toString().length < 9)
        return identifier.toString().padStart(9, "0");
    var nineDigitsIdentifier = identifier % nineDigitsMultiplier;
    return nineDigitsIdentifier.toString();
}
exports.limitStringToSizeNine = limitStringToSizeNine;
var createIdentifier = function () {
    var randomNumber = createRandomNumber();
    var identifier = limitStringToSizeNine(randomNumber);
    return identifier;
};
exports.createIdentifier = createIdentifier;
