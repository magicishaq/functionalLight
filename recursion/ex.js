"use strict";
function isEqual (start, end){
    return start === end;  
}


function isPalindrome(str) {
if(str.length <= 1) {
    return true
}
var match = isEqual(str[0], str[str.length - 1]) 
if(match){ 
return isPalindrome(str.substring(1, str.length - 1))
}else{
    return false; 
}
//cut them off 
//pass into string with first and last letter
}

console.log( isPalindrome("") === true );
console.log( isPalindrome("a") === true );
console.log( isPalindrome("aa") === true );
console.log( isPalindrome("aba") === true );
console.log( isPalindrome("abba") === true );
console.log( isPalindrome("abccba") === true );

console.log( isPalindrome("ab") === false );
console.log( isPalindrome("abc") === false );
console.log( isPalindrome("abca") === false );
console.log( isPalindrome("abcdba") === false );
