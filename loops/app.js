// ======================Loops========================
var table = +prompt("Enter any number to get the table of it");
var howManyTimes = +prompt("How many time you want it to multiply");
document.write(
    "<h1> Table of "+table+"<br>")
for(var i = 1; i<=howManyTimes ;i++){
    document.write(
        table+ " x " + i + " = " + (table*i) +"<br>")
};