// chap 10 USER INPUT & CONDITIONAL STATEMENT
// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
var userCity = prompt("Enter your city name");
if (userCity === "Karachi") {
  alert("Welcome to City of Lights!!");
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
var userGender = prompt("Specify your Gender", "Male,Female");
if (userGender === "Male") {
  alert("Good Morning Sir!!");
}
if (userGender === "Female") {
  alert("Good Morning Ma'am!!");
}
// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
var signalColor = prompt(
  "Choose your road traffic signal color",
  "Red, Yellow, Green"
);
if (signalColor === "Red") {
  alert("Red!! Must Stop🤚");
}
if (signalColor === "Yellow") {
  alert("Ready to Move!!🚶‍♂️");
}
if (signalColor === "Green") {
  alert("Move Now!!🏃‍♂️");
}
// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}
if (true) {
  alert("True");
}
if (false) {
  alert("False");
}
if ("car" < "cat") {
  alert("car is smaller than cat");
}

