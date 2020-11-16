// //Point free playground

// function isOdd(v){
//     return v % 2 == 1; 
// }

// function isEven(v){
//     return !isOdd(v); 
// }

// //point free means no parameters

// //negation function
// //for a function that returns a bool. This wrapper function will return the opposite of the function
// function not (fn) {
//     return function (...args){
//         return !fn(...args)
//     }
// }
// newIsEven = not(isOdd); 
// var even = isEven(2)
// var odd = isOdd(1) 


// console.log(newIsEven(10))


// 

//Advanced point free

function mod (y) {
    return function isMod (x) {
        return x % y 
    }
}


function eq (y) {
    return function isEq(x){
        return x === y
    }
}


var mod2 = mod(2) 
var eq1 = eq(1)

function isOdd (x){
    return eq1(mod2(x))
}

function compose (f1, f2) {
    return function composed (v) {
        return f1(f2(v))
    }
} 

var isOdd = compose(eq1(1), mod2(2))

var isEven = not(isOdd)

function not(fn) {
    return function isNot (...args) {
            return !fn(...args);
    }
}


