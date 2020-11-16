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
 
