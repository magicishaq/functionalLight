

// the shape of a function
//unary function because it takes in one parameter
function increment (x){
    return sum(x, 1)
}
//binary because it takes in two functions
//two inputs one output
function sum (x,y) {
    return x + y; 
}

//enary functions take in multiple, less common

function multiplyByTwoAddOne(x) {
    return  increment(x * 2)
}

//functions in javasrcipt are variodic, meaning even if the parameters shape is 1 . the function can still take in two


// changes the shape of the function. takes in a function and returns the first argument of that function
function unary(fn) {
    return function one(arg) {
        return fn(arg)
    }
}
//changes the shape and returns the first two arguments. 
function binary(fn) {
    return function two(arg1, arg2){
        return fn(arg1, arg2)
    }
}

function f (...args) {
    return args; 
}

var single = unary(f); 
var double = binary(f); 

console.log(double(1,2,3,4))
