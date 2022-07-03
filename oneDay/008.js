/**
 * 자료형 이해하기
 */

let x = 5; //number
let y = "five" //String
let isTrue = true; //boolean
let empty = null // null
let nothing; //undefined
let sym = Symbol("me") //symbol

let item = {
  price: 5000,
  count: 10,
};

let arr = [1, 2,3,4] // Array
let addFunc = function (arg) {
    arr.push(arg);
}

addFunc(5);