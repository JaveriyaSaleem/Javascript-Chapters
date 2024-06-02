// ======================Loops========================

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
var table = +prompt("Enter any number to get the table of it");
var howManyTimes = +prompt("How many time you want it to multiply");
document.write(
    "<h1> Table of "+table+"<br>")
for(var i = 1; i<=howManyTimes ;i++){
    document.write(
        table+ " x " + i + " = " + (table*i) +"<br>")
};

