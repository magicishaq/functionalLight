//Closure
/**
 * 
 * closure is 
 * when a function 'remembers' the variables around it even when that function
 *  is executed elsewhere
 * 
 */

 function counter () {
     var counter = 0 
     return function addToCounter () {
         return counter ++
     }
 }


 var count = counter()
 console.log(count())
 console.log(count())
 console.log(count())
 console.log(count())
 console.log(count())
 var newCount = counter(); 
 console.log(newCount())
 
/**Eager and lazy evalation */
/**Lazy  */
function repeater (count) {
    return  function theRepeat () {
return 'A'.repeat(count) //created  here
    }
}

var lazy = repeater(10); //nothing is created here

lazy() // AAAAAAAAAA called here its lazy therefore its called here
//lazy should be used if the function is not called alot of times
/**Eager evaluation */

function egerRepeater(count) {
    var repeat = 'A'.repeat(count) //created here therefore its eager
    return function eager (){
        return repeat; 
    }
}

var eager = egerRepeater(20) // created here the string
//eager is used id the function is called many times because the strin is cached in the program. 
eager() //called here but string is already created

function compromiseRepeater(count){
    var str; 
    return function compromise (){
        if(str == undefined){
            //second time it gets called, str will be defined
str = 'A'.repeat(count)
        }
        return str; 
    }
}

var compromise = compromiseRepeater(10); 
compromise(); //created here
compromise(); //the same string that was called on line 64 gets called again

/**same can be done with memoize */

function mmRepeater (count) {
    return memoize(function allTheAs(){
        return 'A'.repeat(count)
    })
}
 

function multiply (x,y,z) {
    return x*y*z; 
}
var curriedMethod = curry(
    3, 
    function multiply (x,y,z) {
        return x*y*z; 
    }

)
function curryMult (x){
    return function (y){
        return function (z){
            return x * y * z
        }
    }
}


var ans1 = multiply(1,2,3); 
var ans2 = curryMult(1)(2)(3); 
var ans3 = curriedMethod(1)(2)(3); 

console.log(ans1, ans2, ans3)