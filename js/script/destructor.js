
//Example 1
let list = [1];
let obj = {
             a:10
          }

let {a, b=20} = obj;
let [x, y=2] = list;

//Alternative
// var obj = { a: 1 };
// var list = [ 1 ];
// var a = obj.a;
// var b = obj.b === undefined ? 2 : obj.b;
// var x = list[0];
// var y = list[1] === undefined ? 2 : list[1];
console.log(a,b,x,y)

//Example 2
