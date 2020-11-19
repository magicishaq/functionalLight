//counting the number of vowels in  a string

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