 var obj = {
    id:1,
    name:'raju',
    course:'c++',
    print: function(){
        console.log(this.name)
    }
 }
 obj.print()
 console.log(obj.toString())

 var arr=[1,2,3,4]

 arr.map((a)=>{
    console.log(a)
 })