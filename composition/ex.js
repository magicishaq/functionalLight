"use strict";

function increment(x) { return x + 1; }
function decrement(x) { return x - 1; }
function double(x) { return x * 2; }
function half(x) { return x / 2; }

function compose(...fn) {   
    return function composed (x){
        for(var i = fn.length - 1 ; i >= 0 ; i--){
            x = fn[i](x)
        }
        return x
        
    }
}

/**or using a connected function */
// function compose(...fn) {
//     return function composed(x) {
//         return pipe(...fn.reverse())
//     }
// }

function pipe(...fn) {
    return function piped (x) {
        for(var i = 0 ; i < fn.length; i++) {
             x = fn[i](x)
        }
        return x
    } 
 }

var f1 = compose(increment,decrement);
var f2 = pipe(decrement,increment);
var f3 = compose(decrement,double,increment,half);
var f4 = pipe(half,increment,double,decrement);
var f5 = compose(increment);
var f6 = pipe(increment);

console.log( f1(3) === 3 );
console.log( f1(3) === f2(3) );
console.log( f3(3) === 4 );
console.log( f3(3) === f4(3) );
console.log( f5(3) === 4 );
console.log( f5(3) === f6(3) );
