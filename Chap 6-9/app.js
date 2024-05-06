// CHAP 6 
// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
var value = 10;
document.write("Result: " + "<br>"+
    "The value of a is: " + value + "<br>"+
    "<br>"+
    "The value of ++a is: " + ++value + "<br>"+
    "Now the value of a is: " + value + "<br>"+
    "<br>"+
    
    "The value of a++ is: " + value++ + "<br>"+
    "Now the value of a is: " + value + "<br>"+
    "<br>"+
    
    "Now the value of --a is: " + --value + "<br>"+
    "Now the value of a is: " + value + "<br>"+
    "<br>"+
    
    "Now the value of a-- is: " + value-- + "<br>"+
    "Now the value of a is: " + value + "<br>"+
    "<br>" +
    "<h3>Question 2</h3>"

)
// 2. What will be the output in variables a, b & result after
// execution of the following script:
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write(result);
// Explain the output at each stage:
// --a; 
// --a - --b; 
// --a - --b + ++b; 
// --a - --b + ++b + b--; 
document.write(
(--a )+ "<br>"+
(--a - --b) + "<br>"+
(--a - --b + ++b) + "<br>"+
(--a - --b + ++b + b--) + "<br>"

);
