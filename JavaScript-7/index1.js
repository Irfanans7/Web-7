var a = "irfan"
// console.log (a)

let b =5
b=7
// console.log(b)

const n="java"
// console.log(a,b,n)

//datatype-- number,  string,  boolean, undefined,  bigInt, Symbol, Null

// let : it means you declare and assign the values but we cannot redeclare the same variable but we can reassign or update the sa,e variable.

// var : we can redeclare and reassign the values but we got the last assigned values as a result.

//const : permanent assigned values and declaration


// var firstName ="hira"
// var lastName = "albert"
// console.log(`firstName : ${firstName}  lastName : ${lastName}`)


// let value=100
// let to = value==100
// console.log(to)


let arr = [1,2,3,4,5,6]
let new1 = arr.find((a,b,c)=>{
    return a>2
})
console.log(new1)


let new2 = arr.filter((a,b,c)=>{
    return a>2
})
console.log(new2)

let new3 =arr.reduce((a,b,c,d)=>{   
    //a-first index valye
    //b-conyinuation from second value 
    //c- index number
    //d - array number
    return a+b;
})
console.log(new3)


//object - non primitive data type, dot(.) notation only apply in object, stores values in form of keys n values

// object in function
// function add(a){
//     console.log(a.isPass)
// }

// let student = {
//     name:'abd',
//     age:24,
//     isPass:true
// }
// add(student)
// console.log(student)
// console.log(student.age=34)


//3 type function in object

// let obj1 ={
//     name:'ABX',
//     lastName:'DEF',
//     sum:function(){
//         console.log(this.name+this.lastName)
//     }
// }
// obj1.sum()

//array of object
let arr1 =[
    {id:1, name:'vish'},
    {id:2, name:'kanya'},
]
arr1.map((k)=>{   
     //map funtion is used to get all the required   feild from the array value
    console.log(k.name)   //k is giving value of all object
})
console.log(arr1[1].id)


let arr2 =[1,2,3,4,5]
arr2.push(8)    //add the values
arr2.pop()      // remove the last values which is given
arr2.unshift()  //remove from the first value
console.log(arr2)