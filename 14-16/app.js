// ARRAY 
// 1. Declare an empty array using JS literal notation to store
// student names in future.
var studentNames = [];
// 2. Declare an empty array using JS object notation to store
// student names in future.
var studentNames_2 = new Array ();
// 3. Declare and initialize a strings array.
studentNames = ["Javeriya","Misbah","Rabia","Ramsha","Tayyaba","Rida","Marwa","Safa"];
console.log(studentNames);
// 4. Declare and initialize a numbers array.
var studentsNum = [11,22,33,44,55,66,77,88];
// 5. Declare and initialize a boolean array.
var booleanArray = [true,false];
console.log(booleanArray);
// 6. Declare and initialize a mixed array.
var mixedArray = ["Javeriya","Karachi","Biryani","Cola Next","Token wala jhula"];
console.log(mixedArray);
// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:
var educationQualification = [];
educationQualification = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
console.log(educationQualification);

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
var studentNames_ques8 = ["Micheal","John","Tony"];
var studentScore = [320,230,480];
var totalMarks = 500;
console.log("Score of "+studentNames_ques8[0]+" is "+studentScore[0]+". "+"Percentage: "+(studentScore[0]*100/totalMarks)+"%"
);
console.log("Score of "+studentNames_ques8[1]+" is "+studentScore[1]+". "+"Percentage: "+(studentScore[1]*100/totalMarks)+"%"
);
console.log("Score of "+studentNames_ques8[2]+" is "+studentScore[2]+". "+"Percentage: "+(studentScore[2]*100/totalMarks)+"%"
);
// 9. Initialize an array with color names. Display the array
// elements in your browser.
var colorName = [];
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
colorName.unshift(prompt("Type any color name here"));
document.write("Here's is the color name you type: "+"<b>"+colorName +"</b>" +"<br>");
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
colorName.push(prompt("We want one more"),prompt("Aik or color chahiye"));
// colorName.pop(); //it's additional i was checking up
document.write("Here are updated color Names: "+"<b>"+colorName+"</b>"+"<br>");
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
colorName.unshift(prompt("More color"),prompt("One More"),);
document.write("Here are more : "+"<b>"+colorName +"</b>"+ "<br>");
// d. Delete the first color in the array. Display the updated
// array in your browser.
colorName.shift();
document.write("After Deleting the first one : "+"<b>"+colorName +"</b>"+ "<br>");


