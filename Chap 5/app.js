// CHAP 5  MATH EXPRESSIONS
//1. Write a program that take two numbers & add them in a
// new variable. Show the result in your browser.

var value1 = 8;
var value2 = 5;
var result = value1 + value2 ;
document.write("Sum of "+ value1+ " and " + value2 + " is "+ result + "." + "<br>" + "<br>");

// 2. Repeat task1 for subtraction, multiplication, division &
// modulus.
result = value1 * value2;
document.write("Product of "+ value1+ " and " + value2 + " is "+ result + "." + "<br>" + "<br>");
result = value1 - value2;
document.write("Difference of "+ value1+ " and " + value2 + " is "+ result + "." + "<br>" + "<br>");
result = value1 / value2;
document.write("Quotient of "+ value1+ " and " + value2 + " is "+ result + "." + "<br>" + "<br>");
result = value1 % value2;
document.write("Reminder of "+ value1+ " and " + value2 + " is "+ result + "." + "<br>" + "<br>");

// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
var num1;
// b. Show the value of variable in your browser like “Value
// after variable declaration is: ??”.
document.write("<h2>Question 3</h2>");
document.write("Value after variable declared is " + num1 + "<br>");

// c. Initialize the variable with some number.
num1 = 5;
// d. Show the value of variable in your browser like “Initial
// value: 5”.
document.write("Initial Value " + num1 + "<br>");
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value
// after increment is: 6”.
document.write("After Increment " + ++num1 + "<br>");
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value
// after addition is: 13”.
num1 = +"6"
num1 = num1 + 7;
document.write("After Addition "+ num1 + "<br>");
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value
// after decrement is: 12”.
document.write("After Decrement "+ --num1 + "<br>");
// k. Show the remainder after dividing the variable’s value
// by 3.
// l. Output : “The remainder is : 0”.
document.write("The reminder is "+ num1%3 + "<br>");
// end of question 3

// 4. Cost of one movie ticket is 600 PKR. Write a script to
// store
// ticket price in a variable & calculate the cost of buying 5
// tickets
// to a movie. Example output:
var ticketCost = 600 ;
var totalTickets = 5 ;

document.write("<h2>Question 4</h2>");
document.write("Total cost of buying "+ totalTickets +" tickets to a movie is "+ (ticketCost* totalTickets) + " PKR" + "<br>" );

// Table 
// 5. Write a script to display multiplication table of any
// number in your browser. E.g
var tableOf;
var tableValue = 1;
var promptValue = prompt("Which Table you want to be shown here?", "Enter your Value");
document.write("<h2>Question 5</h2>");
document.write(
    promptValue + " X "+ tableValue + " = " + (promptValue*tableValue) + "<br>" +
    promptValue + " X "+ ++tableValue + " = " + (promptValue*tableValue) + "<br>" +
    promptValue + " X "+ ++tableValue + " = " + (promptValue*tableValue) + "<br>" +
    promptValue + " X "+ ++tableValue + " = " + (promptValue*tableValue) + "<br>" +
    promptValue + " X "+ ++tableValue + " = " + (promptValue*tableValue) + "<br>" +
    promptValue + " X "+ ++tableValue + " = " + (promptValue*tableValue) + "<br>" +
    promptValue + " X "+ ++tableValue + " = " + (promptValue*tableValue) + "<br>" +
    promptValue + " X "+ ++tableValue + " = " + (promptValue*tableValue) + "<br>" +
    promptValue + " X "+ ++tableValue + " = " + (promptValue*tableValue) + "<br>" +
    promptValue + " X "+ ++tableValue + " = " + (promptValue*tableValue) + "<br>" 
);

