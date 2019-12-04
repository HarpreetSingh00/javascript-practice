//Date : 27-03-19

document.write("***Applying filter function***<br>")
//filter function
let nums = [12,10,5,7,6,23,99,43,23,12,10];
let get_evens_nums = nums.filter(function(ele){
                        return ele%2 == 0
                    })

let get_odd_nums = nums.filter(function(ele){
                        return ele%2 != 0
                    })

document.write("Nums Array : "+nums+"<br>")
document.write("Even Nums Array : "+get_evens_nums+"<br>")
document.write("Odd Nums Array : "+get_odd_nums+"<br>")
document.write("<br><br><br>")


//example : 2
document.write("***Bowlers with their fatest ball balled : ***<br>");
let bowlers_detail = [
                        { name:"Shoaib Akhtar",  speed:100.23 },
                        { name:"Brett Lee",  speed: 100 },
                        { name:"Andy Roberts",  speed:99.1 },
                        { name:"Fidel Edwards",  speed:97.9 },
                        { name:"Curtly Ambrose",  speed: 90 },
                        { name:"Shaun Tait",speed:100.1 },
                        { name:"Shane Bond",speed:97.1 },
                        { name:"Dale Steyn",speed:97.0 },
                        { name:"Parveen Kumar",speed:80.7 },
                        { name:"Zaheer Khan",speed:86.3 },
                        { name:"Maliga",speed:92.4 }
                    ];
document.write("<br>");
bowlers_detail.forEach(function(value){
    document.writeln(value.name+" :  "+value.speed+"<br>")
});
// mph ====> kph  ,mph*1.60934
bowlers_detail.sort(function(a, b){return b.speed-a.speed});
// let bowlers_details_kph = bowlers_detail.map(function(ele){ return ele.speed * 1.60934; })
document.write("<br><br>");
document.write("***Display top 5 fast bowler :***<br>");
for (let i = 0; i < 4; i++) 
{
    document.writeln(bowlers_detail[i].name+" :  "+bowlers_detail[i].speed+"<br>")
}
document.write("<br><br><br>")


//example : 3
document.write("***Applying Splice method :***<br>");
let arr = ["Rahul","Bhupinder","Manider","Sanju","Umesh"];
document.write("Array : "+arr+"<br>");
let rem = arr.splice(0,2,"Mohan","Sweeta","Anmol")
document.write("After Splicing < arr.splice(0,2,Mohan,Sweeta,Anmol) : >"+arr+"<br>");
document.write("Removed Elements : "+rem+"<br>")
document.write("<br><br><br>")

//example : 4
document.write("***Applying Concat method :***<br>")
let arr_roll = [1,2,3,4,5,6,7,8];
let arr_name = ['Abhi','Ajay','Arsh','Guru','Harjinder','Harpreet','Jasmine','Kanishk'];
let concated_arr = arr_roll.concat(arr_name);
document.write("Array a : "+arr_roll+"<br>");
document.write("Array b : "+arr_name+"<br>");
document.write("Array a+b : "+concated_arr+"<br>");