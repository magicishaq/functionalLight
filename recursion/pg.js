//counting the number of vowels in  a string
"use strict"; 
function isVowel(char){
    return ['a', 'e' , 'i', 'o', 'u'].includes(char)
}

// function countVowels(str) {
//     var count = 0
//     for(var i = 0; i < str.length; i++){
//         if (isVowel(str[i])){
//             count ++
//         }  
//     }
//     return count; 
// }


/**
 * Using recursion
 */
function countVowels (str) {
    //condition to end the function // recursion
    var first = (isVowel(str[0]) ? 1 : 0)
    if(str.length <= 1){
        return first
    }
    
    return first + countVowels(str.slice(1)); 

}

var string = 'the quick brown fox jumped over the lazy dog'; 

function decr (x) {
    return sub(x - 1); 
}

function sub (x,y) {
    return x - y; 
}

function wholeNumber(x) {
    if(x < 100){
        return x
    } else{
        return (Math.trunc(x/2))
    }
}

function reducer(obj, [key, value]){
    return {
        ...obj,
        [key]: value
    }
}

function reduce(reducer, initValue, arr){
    
}
var thingy = {name: 'ishaq', age: 27}

var newThingy = reducer(thingy, ["school", "lakey lane"])

console.log(newThingy)
