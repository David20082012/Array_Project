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

