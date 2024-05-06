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
// 6. The Temperature Converter: It’s hot out! Let’s make a
// converter based on the steps here.
// a. Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.
// Celsius to Fahrenheit conversion
document.write("<h1>Temperate Converter</h1>");
document.write("<h3>Converted to Fahrenheit</h3>");
var celsiusTemp = 32;
var fahrenheitTemp = (celsiusTemp * 9/5) + 32;
document.write(celsiusTemp + "°C is " + fahrenheitTemp + "°F" + "<br>");

// Fahrenheit to Celsius conversion
document.write("<h3>Converted to Celsius</h3>");
var fahrenheitTemp2 = 77;
var celsiusTemp2 = (fahrenheitTemp2 - 32) * 5/9;
document.write(fahrenheitTemp2 + "°F is " + celsiusTemp2 + "°C");

// 7. Write a program to implement checkout process of a
// shopping cart system for an e-commerce website. Store
// the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
document.write("<h3>QUESTION 7</h3>");
var price_1 = 68;
var price_2 = 73;
var orderQty_1 = 4;
var orderQty_2 = 2;
var shippingCharges = 280;
var totalcost = price_1 * orderQty_1 + price_2 * orderQty_2 + shippingCharges;

document.write("<ul>" +"<li>"+ "Price of item 1 is " + price_1 + "</li>" + "<br>"+
"<li>"+ "Price of item 2 is " + price_2 + "</li>" + "<br>"+
"<li>"+ "Order Quantity of Item 1 is " + orderQty_1 + "</li>" + "<br>"+
"<li>"+ "Order Quantity of Item 2 is " + orderQty_2 + "</li>" + "<br>"+
"<li>"+ "Shipping Charges are " + shippingCharges + "</li>" + "<br>"+
"<li>"+ "Total cost of your order is " + totalcost + " Rupees" + "</li>" + "</ul>"

);

// 8. Store total marks & marks obtained by a student in 2
// variables. Compute the percentage & show the result in
// your browser
var totalMrks= 980;
var mrksObt = prompt("Let's Calculate your Percentage based on the Marks Obtained", "Enter your Marks: ?/980");

var percentage = mrksObt/totalMrks*100;
document.write("<h3>QUESTION 8</h3>");
document.write("<h3>MARK SHEET:</h3>"+
"Total Marks: "+ totalMrks  + "<br>"+
"Marks Obtained: "+ mrksObt  + "<br>"+
"Percentage: "+ percentage + " %" 

);

// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a
// script to convert the total currency to Pakistani Rupees.
// Perform all calculations in a single expression.
// (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee
// and 1 Saudi Riyal = 28 Pakistani Rupee)
document.write("<h3>QUESTION 9</h3>");
document.write("<h3>Currency Converter to PKR</h3>");

var usDollar = 10;
var saudiRiyal = 25;
var dollarToPkr = 270;
var riyalToPkr = 71;
var total$ = usDollar * dollarToPkr + saudiRiyal * riyalToPkr
document.write("Total Currency in PKR: " +  total$ + "<br>");

document.write("<h3>QUESTION 10</h3>");
// 10. Write a program to initialize a variable with some
// number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression
var numberArth = 44;
document.write ("Answer " + numberArth + 5 * 10 / 2); 

document.write("<h3>QUESTION 11</h3>");
// 11. The Age Calculator: Forgot how old someone is?
// Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored
// values.
document.write("<h3>Age Converter</h3>");
var currentYear = 2016;
var birthYear = 1992;
var age1 = currentYear - birthYear;
document.write("My Age "+ age1);

// 12. The Geometrizer: Calculate properties of a circle.
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and
// output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The
// area is NN”. (Hint : Area of a circle = π r2, π = 3.142)
document.write("<h3>Ques: 12 , Geometrizer </h3>");
// circumference of a circle is the distance around the circle
var radius = 20;
document.write("Radius: " + radius + "<br>");
var circumference = 2 * 3.142 * 20;
document.write("Circumference of the Circle is: " + circumference + "<br>");
var areaOfaCircle = 3.142 * 20 * 20;
document.write("The Area is: " + areaOfaCircle + "<br>");

// 13. The Lifetime Supply Calculator: Ever wonder how
// much a “lifetime supply” of your favorite snack is?
// Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of
// your life.
// Output the result to the screen like so: “You will need
// NNNN to last you until the ripe old age of NN”.

document.write("<h3>Question 13 </h3>");
document.write("<h3>The Lifetime Supply Calculator: </h3>");
var snack = "Potato Chips";
document.write("Fav Snack: " + snack + "<br>");
var myCurrentAge = 20;
document.write("My Current Age: " + myCurrentAge + "<br>");
var myMaxAge = 105;
document.write("My Max Age: " + myMaxAge + "<br>");
var amoutOfSnack = 5 ;
document.write("Amount of Snacks per day: " + amoutOfSnack + "<br>");
var qtyOf_Snake = (myMaxAge - myCurrentAge) * amoutOfSnack;
document.write ("I will need " + qtyOf_Snake + " to last you until the ripe old age of " + myMaxAge );


// End 















