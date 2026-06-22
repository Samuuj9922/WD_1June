//Function Types

//1. Named function

// function add(a,b){
//     console.log(a+b);
    
// }
// add(5,7)


// 2.Ananomous function

// function (a,b){
//     console.log(a+b);
    
// }
// (5,7)

//3 .IIF (Imediate invoke function)


(function(a,b){
    console.log(a-b);
    
}
(5,7))

//4. function with expression


let mul=
function (p,q){
    console.log(p*q);
    
}
mul(10,2)


// 5. Arrow function

let square=((r,s)=>{
    console.log(r*s);
    
})
square(5,5)