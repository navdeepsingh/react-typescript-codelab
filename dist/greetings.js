"use strict";
function sum(a, b) {
    return a + b;
}
var el = document.getElementById("result");
var result;
function divide(a, b) {
    return a / b;
}
result = divide(10, 3);
el.innerHTML = result.toString();
