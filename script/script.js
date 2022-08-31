// console.log()
// = assignment
// == check equality
// === check both equality & variable type


// variables
// condition
// loop  (for & While & do while)
// Function
// Array



// for(var i=1 ; i<=100 ; i++ ){
//     console.log(i);
// }



// var i = 1;
// while(i<=100){
//     console.log(i);
//     i++;
// }



// var i = 1;
// do{
//     console.log(i);
//     i++;
// }while(i<=100);


// FUNCTION :- is a reused code

// * VOID Function
// function calcPrice(price, tax){
//     var res = price*tax;
//     console.log(res);
// }

// calcPrice(2000, 1.4);

// RETRUN Funvtion
// function calcPrice(price, tax){
//     var res = price*tax;
//     return res;
// }

// var result = calcPrice(2000, 1.4);
// console.log(result);


// //Hoisting
// console.log(x);
// var x=10;
// // Hoisting steps =>
// var x;
// console.log(x) // => undefined
// x=10;          // the variable will be assigned later at his mentioned code step



// Expresstion Function
var calcPrice = function (price, tax){
    var res = price * tax;
    console.log(res);
}


//// ACCESS MODIFIERS /////

// => Global Variables
// var x = 10; // global
// if(x == 10){
//     var y = x; //global
// }
// console.log(y);

// // // => Let
// let x = 10; // global
// if(x == 10){
//     let y = x; //local
// }
// console.log(y); // can't be used out side

// // => Const
// const x = 10; // global
// if(x == 10){
//     y = x; //local
// }
// console.log(y);


// ARRAY => List
        // 0  1  2  3  4 => Index
var arr = [10, 2, 18, 9, 5];

arr.push(100);
arr.unshift(0);
arr.shift();
arr.pop();

for(var i = 0 ; i < arr.length; i++){
    console.log(arr[i]);
}
console.log(arr.sort()); // will sort the array elments based on the value foe each elment



