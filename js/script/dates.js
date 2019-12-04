//Date : 27-03-19

document.write("***date = new Date(0)***<br>");
let date = new Date(0);
document.write("Javascript store dates as numbers of milliseconds since ");
document.write(date+"<br><br>");

document.write("***date = new Date()***<br>");
date = new Date();
document.write(date);
document.write("<br>");
document.write(date.toUTCString()+"<br><br>");


document.write("***date = Date.now()***<br>");
date = Date.now();
document.write("Time in Miliseconds since 1970 : "+date+"<br><br>"); //return number of miliseconds since 1970

document.write("***new Date() ========> Date.parse(date)***<br>")
date = new Date();
date_in_mili = Date.parse(date);
document.write("Time in miliseconds : "+date_in_mili+"<br><br>");

