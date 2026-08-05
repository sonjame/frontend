// 주석
/*
    여러줄 주석

*/

console.log("Hello");

// var, let(변수), const(상수)
// let 변수 = 값;
// const 변수 = 값

var value1 = 4;
let darkModeOn = true;
const PI = 3.1415926535;

value1 = 5;
darkModeOn = false;
// PI = 4.14; // TypeError: Assignment to constant variable.

var value1 = "안녕하세요";
// let darkModeOn = "반갑습니다"; // SyntaxError: Identifier 'darkModeOn' has already been declared

darkModeOn = "안녕하세요";

console.log(value2);
// var value2 = 45;
let value2 = 46;
