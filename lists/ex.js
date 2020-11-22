"use strict"; 

// function five () {return 5};
// function nine () {return 9};

function add(x,y) {
    return x+y
}

add(five(), nine())

function add2 (f1, f2){
    return add(f1, f2)
}
//make a function wrapped around a function
function constant (x){
    return function y(){
        return x
    }
}

var five = constant(5);
var nine = constant(9); 

add2 (five, nine); 


//iterative approach
function addn(...fns){
    while(fns.length < 2){
        let [fn0, fn1 , ...rest] = fns; //desructuring
        fns = [
            function () {return add2(fn0, fn1)}, ...rest
        ]
    }
    return add2(fns[0], fns[1])
}
//recusuve
 function addn([fn1, fn2, ...rest]){
    if(rest.length == 0)  return add2(f1(), f2())
    {
        //recursion because there is extra parameters
        return addn(
            [
                function f() {
                    return add2(fn1, fn2)
                    //everytime this is called it adds to of the paramters together
                }, 
                ...rest
            ]
        )
    }

   
}
//reduce 
function addn(fns){
    return fns.reduce(function reducer(composed, fn){
      return function f () {
          add2(composed, fn)
      }  
    })() //call it straight away 
    
 }


 var numbers = [1,2,34,5,6,7,4,5,5,58,13,14]; 

 //unique

 numbers.reduce(function unique(newList,num) {
if(!newList.includes(num)) return newList.concat(num);
return newList; 
//if number isn't on newList, push it to newList
 },[])
 .filter(function isEven(num) {
     return num % 2 == 0
 })
.map(constant)



