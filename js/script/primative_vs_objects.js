var a = 20;
var b = a;
a = 30;
console.log("a : ",a);  //a  = 30
console.log("b : ",b);  //b  = 20



var obj1 = {
    name:'Harpreet',
    age:19
}
var obj2 = obj1;
obj1.age = 22;
console.log(obj1)   //age: 22
console.log(obj2)   //age: 22


var age = 20;
var obj = {
    name:"avi",
    city:"Ambala"
}

function change(a,b)
{
    a = 30;
    b.city = "Chandigarh"
}

change(age, obj);
/* 
    when we passed primitive in function their copy is passed and objects are passed by reference
*/
console.log(age); //20
console.log(obj); //obj.city = Chandigarh








