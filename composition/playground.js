function minus2 (x) {
    return x - 2; 
}

function triple (x) {
    return x * 3
}

function increment(x) {
    return x + 1; 
}

function curry (x) {
    return minus2(triple(increment(x)))
}

function newCurry(f3,f2,f1){
    return function (x) {
        return (f3(f2(f1(x))))
    }
}


var num = minus2(2); 
num += triple(num)
num += increment(num)

console.log(num)

var num2 = curry(2) 

console.log(num2, 'this is num two')