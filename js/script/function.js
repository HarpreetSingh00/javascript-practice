//Date : 27-03-19


//function are instance of Object


function Person(){
    // The Person() constructor defines `this` as an instance of itself.
    this.age = 0;
  
    setInterval(function growUp() {
      this.age++;
      console.log(this.age)   //displaying NaN
    }, 1000);
  }
  

function Person_2() {
    // The Person() constructor defines `this` as an instance of itself.
    this.age = 0;
  
    setInterval(() => {
      this.age++;
      console.log(this.age)   //displaying incremental values
    }, 1000);
}

function Person_3(){
    var that = this;
    that.age = 0;

    setInterval(function growUp() {
        that.age++;
    }, 1000);
}


  //var p = new Person();
  //var q = new Person_2(); //this is working fine
  //var r = new Person_3();  //this is not working

document.write("***Default Parameter Example : ***<br><br>");
//Default  parameter functions
function foo(first_name, last_name, middle_name="  ")
{
    return first_name+" "+middle_name+" "+last_name+"<br>";
}

document.write(foo("Harpreet","Singh","Dhillon"));
document.write(foo("AviKunj","Mehdiratta"));
document.write(foo("Kamal","Sharma"));
document.write(foo("Gurbhinder","Singh","Randhawa"));


//Rest parameters
document.write("<br>***Rest \ Variable Parameters Example : ***<br><br>");
function foo_2(...vargs){
    vargs.forEach(function(ele){
        document.write(ele+"<br>");
    })
}

foo_2('c','c++','java','php','javascript')


//Example  : Passing function as argument

let years  = [ 1990, 1965, 1937, 2005, 1998 ];

function arrayCalc(arr, func)
{
    let arrRes = [];
    for(let i=0; i<arr.length;i++)
    {
        arrRes.push(func(arr[i]));
    }
    return arrRes;
}

function calculateAge(ele)
{
    return 2019 - ele;
}

function isAgeFull(ele)
{
    return ele >= 18;
}

function maxHeartRate(ele)
{
    if(ele >= 18 && ele <=81)
    {
        return Math.round(206.9 - (0.67 * ele));
    }else{
        return -1;
    }
}


let ages = arrayCalc(years, calculateAge);
let fullAges = arrayCalc(ages, isAgeFull);
let rates = arrayCalc(ages, maxHeartRate);
console.log("Ages : ",ages);
console.log("Full Ages : ",fullAges);
console.log("Rates : ",rates);