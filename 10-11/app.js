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
// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
document.write("<h2>Question 06</h2>")
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
  "<tfoot><tr><td><b> </b></td>"+ "<td><b>"+ finalTotal +"</b></td>" + "<td><b>" + finalMarksObt + "</b></td>" + "<td><b>" + percentageFinal +"%</b></td>" + "</tr></tfoot>" +

  // End of table
  "</table>"


 );
if (percentageFinal > 79) {
  alert("MARKSHEET\n\nTotal marks: " + finalTotal + "\n" +
    "Marks Obtained: " + finalMarksObt + "\n" +
    "Percentage: " + percentageFinal + "\n" +
    "Grade: A+\n" +
    "Remarks: Excellent!"
  );
};
if (percentageFinal > 69) {
  alert("MARKSHEET\n\nTotal marks: " + finalTotal + "\n" +
    "Marks Obtained: " + finalMarksObt + "\n" +
    "Percentage: " + percentageFinal + "\n" +
    "Grade: A\n" +
    "Remarks: Good!"
  );
};
if (percentageFinal > 59) {
  alert("MARKSHEET\n\nTotal marks: " + finalTotal + "\n" +
    "Marks Obtained: " + finalMarksObt + "\n" +
    "Percentage: " + percentageFinal + "\n" +
    "Grade: B\n" +
    "Remarks: You need to improve!"
  );
};
if (percentageFinal < 59) {
  alert("MARKSHEET\n\nTotal marks: " + finalTotal + "\n" +
    "Marks Obtained: " + finalMarksObt + "\n" +
    "Percentage: " + percentageFinal + "\n" +
    "Grade: Fail\n" +
    "Remarks: Sorry"
  );
};
// end 
document.write("<h2>Guess Game</h2>")





