// var a
console.log(a)   //hoisting is done it automatically assin the value in top
 var a=3


 let b
console.log(b)
// let b=3       if we assing let after console it give error 

outer()
function outer(){
    console.log("koi")
}


//      variable can be assign globally an acessable
//  in condition we have to assign euther globally or local
// let c=18  
{
    // let c = 39
    var c=5
    console.log(c)
}
console.log(c)


// higher order function - a function contains functions inside it

function one(h){
    console.log('jii')
}
function two(){
    console.log('jju')
}

one(two())


function ab(){
    console.log("jiei")
    function bc(){
        console.log('fwyr')
    }
    return bc
}

let r= ab()
r()