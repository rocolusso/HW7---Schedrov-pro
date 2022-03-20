'use strict';

//
// 1) с помощью промта спрашиваем у пользователя что он хочет сделать (add, sub, mult, div).
//
// 2) с помощью промта спрашиваем у пользователя первое число.
//
// 3) с помощью промта спрашиваем у пользователя второе число.
//
// 4) С помощью alert или console.log выводим результат действия (add, sub, mult, div)
//
// со всеми операндами (Н-р "2 + 3 = 5" )

let deystvie=prompt('Make your choose: add, sub, mult or div ?');
let firstNum=Number(prompt("Enter the first num"));
let secondNum=Number(prompt("Enter the second num"));

const add= firstNum + secondNum;
const sub=firstNum - secondNum;
const mult=firstNum * secondNum;
const div=firstNum / secondNum;

if (deystvie==='add') {
    console.log('Addition of '+(firstNum)+"+"+(secondNum)+"="+(add));
    console.log('Subtraction of '+(firstNum)+"-"+(secondNum)+"="+(sub));
    console.log('Multiplication of '+(firstNum)+"*"+(secondNum)+"="+(mult));
    console.log('Division of '+(firstNum)+"/"+(secondNum)+"="+(div));
}

if (deystvie==='sub') {
    console.log('Subtraction of '+(firstNum)+"-"+(secondNum)+"="+(sub));
    console.log('Addition of '+(firstNum)+"+"+(secondNum)+"="+(add));
    console.log('Multiplication of '+(firstNum)+"*"+(secondNum)+"="+(mult));
    console.log('Division of '+(firstNum)+"/"+(secondNum)+"="+(div));
}

if (deystvie==='mult') {
    console.log('Multiplication of '+(firstNum)+"*"+(secondNum)+"="+(mult));
    console.log('Addition of '+(firstNum)+"+"+(secondNum)+"="+(add));
    console.log('Subtraction of '+(firstNum)+"-"+(secondNum)+"="+(sub));
    console.log('Division of '+(firstNum)+"/"+(secondNum)+"="+(div));
}

if (deystvie==='div') {
    console.log('Division of '+(firstNum)+"/"+(secondNum)+"="+(div));
    console.log('Addition of '+(firstNum)+"+"+(secondNum)+"="+(add));
    console.log('Subtraction of '+(firstNum)+"-"+(secondNum)+"="+(sub));
    console.log('Multiplication of '+(firstNum)+"*"+(secondNum)+"="+(mult));
}