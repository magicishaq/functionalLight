"use strict";

// function output(txt) {
// 	console.log(txt);
// }

//point free

var output = console.log.bind(console); 

// function printIf(shouldPrintIt) {
// 	return function(msg) {
// 		if (shouldPrintIt(msg)) {
// 			output(msg);
// 		}
// 	};
// }

function when(fn) {
    return function(predicate){
        return function(...args){
            if (predicate(...args)) {
                return fn(...args);
            }
        };
    };
}

function isShortEnough(str) {
	return str.length <= 5;
}

function not (fn){
	return function isNot (...args){
		return !fn(...args)
	}
}

var isLongEnough = not(isShortEnough); 

var msg1 = "Hello";
var msg2 = msg1 + " World";
var printIf = when(output); 
printIf(isShortEnough)(msg1);		// Hello
printIf(isShortEnough)(msg2);
printIf(isLongEnough)(msg1);
printIf(isLongEnough)(msg2);		// Hello World
