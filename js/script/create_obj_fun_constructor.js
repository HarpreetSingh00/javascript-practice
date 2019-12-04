


//To Create Object: First Method
//function constructor

let Person =  function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.show_details = function()
    {
        console.log(`${this.name} ${this.yearOfBirth} ${this.job}`);
    };

    this.show_details_2 = () =>{
        console.log(`${this.name} ${this.yearOfBirth} ${this.job}`);
    }

}//Person Constructor

//here if we are going to call this function without new keyword, the values are going to set on window's object
//but not on Person's object
//Person('Rohan',1999,'Bank Manager');


// let Person_error =  (name, yearOfBirth, job)=>{
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }this is not going to act like constructor

// let atul = new Person_error('Atul',1976,'CTO')
// console.log(atul) //Error : Person_1 is not a constructor
//  Its means arrow functions will not act as constructor's

let person_1 = new Person('Harpreet',1997,'Software Engineer'); // Object Instantion
//new helps to create new empty object and another important thing is that it set's this variable to that function's scope
//console.log(window.Person.harpreet.name) ~Error
person_1.show_details();
person_1.show_details_2();

let person_2 = new Person('Guru',1999,'Artist')
person_2.show_details();

//till this point our functions which are declared inside Person constructor will attach to every objects of 
//Person constructor and this is going to be overhead bcz there might be 100 of functions attach to every obj
//Now we are going to solve this problem by attaching function to prototype property of Person Constructor.
//This way is going to hold only  one copy and every object will access it. And this is Inheritance
Person.prototype.calculateAge = function()
{
    return console.log(`Age : ${2019 - this.yearOfBirth}`);
}//this method is going to Added in Person Constructor

person_1.calculateAge();
person_2.calculateAge(); 

console.log(person_1.hasOwnProperty('name')); //true
console.log(person_1.hasOwnProperty('calculateAge'));//false
console.log(Person.hasOwnProperty('calculateAge'))
console.log(person_1 instanceof Person) 
console.log(person_1)



//To Create Object : 2nd Method
//Object.Create

var personProto = {
    calculateAge: function()
    {
        console.log(2016-this.yearOfBirth)
    }
}

var harpreet = Object.create(personProto);  //1st way
harpreet.name = 'Harpreet';
harpreet.job = 'Software Engineer';
harpreet.yearOfBirth = 1997;

var avi = Object.create(personProto,{
    name: { value: 'Avi' },
    job:{ value: 'testing' },
    yearOfBirth: {value:1997}
})

/*
    The difference between Object.create and function pattern is that Object.create builds an object that 
    inheritance directly from the one we passed into first arguments, while function constructor the newly created
    object inherits from the constructor prototype property
*/


//Example Inheritance practice
console.log("*************************************")

let Student = function(name, roll){
    this.name = "name"
    this.roll = 2527
}

Student.prototype.show_student = function()
{
    console.log("Name : "+this.name+" Roll : "+this.roll)
}

let Pysical = function(name,roll,height)
{
    Student.call(this,name,roll)
    this.height = height
}

/* first_stud.show_student();error By default the methods declared on Student's prototype will not be accessed
on child object */

Pysical.prototype = Object.create(Student.prototype);
let first_stud = new Pysical("Harpreet",2527,5.8);
first_stud.show_student();

// Object.defineProperty(Pysical.prototype, 'constructor', { 
//     value: Pysical, 
//     enumerable: false, // so that it does not appear in 'for in' loop
//     writable: true 
// });




