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
document.write("<strong>Values: </strong>" + "a = 2, b = 1" + "<br>"); 
var result = --a - --b + ++b + b--;
document.write( "Result of --a - --b + ++b + b-- is " + result + "<br>"); 
// Explain the output at each stage:
// --a; 
// --a - --b; 
// --a - --b + ++b; 
// --a - --b + ++b + b--; 
document.write(
    "<strong>Explaining the following output:</strong>" + "<br>"+
    "Value of a after the above result is 1 and b = 0" + "<br>"+
    "--a: "+ (--a )+ "<br>"+
    "--a - --b answer: "+ (--a - --b) + "<br>"+
    "--a - --b + ++b answer: "+ (--a - --b + ++b) + "<br>"+
    "--a - --b + ++b + b-- answer: "+ (--a - --b + ++b + b--) + "<br>"
    
);
// 3. Write a program that takes input a name from user &
// greet the user.
document.write("<h3>Question 3</h3>" ) ;      
var username =  prompt("What's your Name?")  ;
document.write("<h3> Hi " + username + " glad to see you here!! </h3>");

document.write("<h3>Question 4</h3>" ) ;     
// 5. Write a program to take input a number from user &
// display it’s multiplication table on your browser. If user
// does not enter a new number, multiplication table of 5
// should be displayed by default. 

// var tableValue = 1;
// var userInput = prompt("Enter a number to display its multiplication table: ");
// document.write("<h2>Question 5</h2>");
// document.write(
//     userInput + " X "+ tableValue + " = " + (userInput*tableValue) + "<br>" +
//     userInput + " X "+ ++tableValue + " = " + (userInput*tableValue) + "<br>" +
//     userInput + " X "+ ++tableValue + " = " + (userInput*tableValue) + "<br>" +
//     userInput + " X "+ ++tableValue + " = " + (userInput*tableValue) + "<br>" +
//     userInput + " X "+ ++tableValue + " = " + (userInput*tableValue) + "<br>" +
//     userInput + " X "+ ++tableValue + " = " + (userInput*tableValue) + "<br>" +
//     userInput + " X "+ ++tableValue + " = " + (userInput*tableValue) + "<br>" +
//     userInput + " X "+ ++tableValue + " = " + (userInput*tableValue) + "<br>" +
//     userInput + " X "+ ++tableValue + " = " + (userInput*tableValue) + "<br>" +
//     userInput + " X "+ ++tableValue + " = " + (userInput*tableValue) + "<br>" 
// );

//     // Check if user entered a number or if the input is empty
//     if (!isNaN(number) && userInput !== "") 
//         {document.write("<h2>Multiplication Table of " + number + "</h2>");
//     } 
//     else {
    //         // If user didn't enter anything or entered invalid input, default to 5
    //         number = 5;
    //         document.write("<h2>Default Multiplication Table of 5</h2>");
    //     }
    
    //     // Display the multiplication table
//     document.write("<ul>");
//     for (var i = 1; i <= 10; i++) {
//         document.write("<li>" + number + " x " + i + " = " + (number * i) + "</li>");
//     }
//     document.write("</ul>");

document.write("<h3>Question 5</h3>" ) ;   
var totalMarks = 100;
var subject1 = prompt("Enter Your 1st Subject Name here");
var subject1Marks = prompt("Enter Your 1st Subject Marks here");
var subject2 = prompt("Enter Your 2nd Subject Name here");
var subject2Marks = prompt("Enter Your 2nd Subject Marks here");
var subject3 = prompt("Enter Your 3rd Subject Name here");  
var subject3Marks = prompt("Enter Your 3rd Subject Marks here");
var resultFormula1 = subject1Marks/totalMarks*100;
var resultFormula2 = subject2Marks/totalMarks*100;
var resultFormula3 = subject2Marks/totalMarks*100;
var finalMarksObt = +subject1Marks + +subject2Marks + +subject3Marks;
var finalTotal = 300;
var percentageFinal =  finalMarksObt/finalTotal*100;

document.write ( 
    // Start of table with paddings
    "<table cellpadding='5' cellspacing='0'>" +
    
    // Header
    "<thead><tr><th><b>Subject</b></th><th><b>Total Marks</b></th><th><b>Marks Obtained</b></th><th><b>Percentage</b></th></tr></thead>" +
    
    // Body
    "<tbody>" +
        "<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + subject1Marks + "</td><td>" + resultFormula1 + "%</td></tr>" +
        "<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + subject2Marks + "</td><td>" + resultFormula2 + "%</td></tr>" +
        "<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + subject3Marks + "</td><td>" + resultFormula3 + "%</td></tr>" +
    "</tbody>" +

    // Footer
    "<tfoot><tr><b><td> </b></td>"+ "<td>"+ finalTotal +"</td>" + "<td>" + finalMarksObt + "</td>" + "<td>" + percentageFinal +"%</td>" + "</b></tr></tfoot>" +

    // End of table
    "</table>"


 );


