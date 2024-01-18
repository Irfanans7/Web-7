var arr = [1,2,3,4,5,'string','hello', true,false]

// function getString(arr){
//     let res=[]
//     for (let item of arr){
//         if(typeof item == 'string'){
//             res.push(item)
//         }
//     }
// return res
// }

// function getNum(arr){
//     let res=[]
//     for (let item of arr){
//         if(typeof item == 'number'){
//             res.push(item)
//         }
//     }
// return res
// }


// console.log(getString(arr))
// console.log(getNum(arr))


function getStr(item){
   return typeof item ==='string'
}

function getNum(item){
    return typeof item ==='number'
 }

 function getBool(item){
    return typeof item ==='boolean'
 }

function get(arr, fn){
    let res=[]
    for(let item of arr){
        if(fn(item)){
            res.push(item)
        }
    }return res
}
console.log(get(arr,getStr))
console.log(get(arr,getNum))
console.log(get(arr,getBool))


// closure : it gives the reference of a inner variable dur ti closure property and it vanishes the inner gec and search in the laxial parent environment
function out(){
    let user='ye sahi h'
    function inner(){
        console.log(user)
    }
    return inner
}
let a = out()
a()