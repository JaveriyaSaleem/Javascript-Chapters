// ARRAY 
// 1. Declare an empty array using JS literal notation to store
// student names in future.
// var studentNames = [];
// 2. Declare an empty array using JS object notation to store
// student names in future.
// var studentNames_2 = new Array ();
// 3. Declare and initialize a strings array.
// studentNames = ["Javeriya","Misbah","Rabia","Ramsha","Tayyaba","Rida","Marwa","Safa"];
// console.log(studentNames);
// 4. Declare and initialize a numbers array.
// var studentsNum = [11,22,33,44,55,66,77,88];
// 5. Declare and initialize a boolean array.
// var booleanArray = [true,false];
// console.log(booleanArray);
// 6. Declare and initialize a mixed array.
// var mixedArray = ["Javeriya","Karachi","Biryani","Cola Next","Token wala jhula"];
// console.log(mixedArray);
// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:
// var educationQualification = [];
// educationQualification = ["SSC","HSC","BCS","BS","BCOM","MS","M.Phil","PhD"];
// console.log(educationQualification);

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
// var studentNames_ques8 = ["Micheal","John","Tony"];
// var studentScore = [320,230,480];
// var totalMarks = 500;
// console.log("Score of "+studentNames_ques8[0]+" is "+studentScore[0]+". "+"Percentage: "+(studentScore[0]*100/totalMarks)+"%"
// );
// console.log("Score of "+studentNames_ques8[1]+" is "+studentScore[1]+". "+"Percentage: "+(studentScore[1]*100/totalMarks)+"%"
// );
// console.log("Score of "+studentNames_ques8[2]+" is "+studentScore[2]+". "+"Percentage: "+(studentScore[2]*100/totalMarks)+"%"
// );
// 9. Initialize an array with color names. Display the array
// elements in your browser.
// var colorName = [];
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// colorName.unshift(prompt("Type any color name here to add at the beginning"));
// document.write("Here's is the color name you type for the begining: "+"<b>"+colorName +"</b>" +"<br>");
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// colorName.push(prompt("We want one more to add at the end"),prompt("Aik or color chahiye"));
// colorName.pop(); //it's additional i was checking up
// document.write("Here are updated color Names after adding at the end: "+"<b>"+colorName+"</b>"+"<br>");
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// colorName.unshift(prompt("More color"),prompt("One More"),);
// document.write("More at the begining : "+"<b>"+colorName +"</b>"+ "<br>");
// d. Delete the first color in the array. Display the updated
// array in your browser.
// colorName.shift();
// document.write("After Deleting the first one : "+"<b>"+colorName +"</b>"+ "<br>");
// e. Delete the last color in the array. Display the updated
// array in your browser.
// colorName.pop();
// document.write("After Deleting the last one : "+"<b>"+colorName +"</b>"+ "<br>");
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// var index = prompt("Add color at any position");
// var color = prompt("which color?")
// colorName.splice(index,0,color);
// document.write("Outcome after adding color at the specific position you want: "+ colorName + "<br>");
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.
// var index = prompt("delete from which specific position");
// var deleted_number = prompt("write how many you want to delete the colors" );

// colorName.splice(index,deleted_number);
// document.write("Outcome after deleting colors at the specific position you want: "+ colorName + "<br>");
// end of question 9 
// ============================QUESTION 10==============================
// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
// var student_scores = [339,428,288,475,320,421,290,480];
// document.write("Student Scores: "+student_scores + "<br>");
// document.write("Student Scores after sorting: "+ student_scores.sort() + "<br>");
// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
// var cities = ["Mumbai","Delhi","Hyderabad","Kolkata","Maharashtra","Banglore"];

// document.write("Cities Name: "+cities+ "<br>");
// var selectedCities = cities.slice(1,4); //from 1 to before 4
// document.write("Selected Cities Names: "+ selectedCities + "<br>");
// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = ["This", "is", "my", "cat"];
// (Use array’s join method)
// document.write("Array: "+arr+"<br>");
// var string = arr.join(" ");
// document.write("String: "+string+"<br>");
// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)
var array = ["Keyboard","Mouse","Printer","Monitor"];
var out;
document.write("Array "+ array + "<br>" );
out = array.shift();
document.write("Out "+ "<br>"+ out + "<br>" );
out = array.shift();
document.write("Out "+ "<br>"+ out + "<br>" );
out = array.shift();
document.write("Out "+ "<br>"+ out + "<br>" );
out = array.shift();
document.write("Out "+ "<br>"+ out + "<br>" );
// it only shows the number the was deleted from the begining in browser 
// ======================= end of 13 ======================
// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last In-
// First Out)
var array = ["Keyboard","Mouse","Printer","Monitor"];
var out;
document.write("Array "+ array + "<br>" );
out = array.pop();
document.write("Out "+ "<br>"+ out + "<br>" );
out = array.pop();
document.write("Out "+ "<br>"+ out + "<br>" );
out = array.pop();
document.write("Out "+ "<br>"+ out + "<br>" );
out = array.pop();
document.write("Out "+ "<br>"+ out + "<br>" );


// pop thing  for practice 
var animals = ["Dog","Cat","Camel","Elephant"];
document.write("Animals "+ animals + "<br>");
var popThing;
popThing = animals.pop();
document.write("Last one "+popThing + "<br>")

popThing = animals.pop();
document.write("Last one "+popThing + "<br>")

popThing = animals.pop();
document.write("Last one "+popThing + "<br>")
// it only showing the value deleted from the end at every time we updating 
// =========================end of 14============================
// 15. Write a program to store phone manufacturers (Apple,
//     Samsung, Motorola, Nokia, Sony & Haier) in an array.
//     Display the following dropdown/select menu in your
//     browser using document.write() method: 
var phoneMenufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony","Haier"];
var index = 0;
document.write("<select>")
document.write("<option>"+phoneMenufacturers[index++]+"</option>")
document.write("<option>"+phoneMenufacturers[index++]+"</option>")
document.write("<option>"+phoneMenufacturers[index++]+"</option>")
document.write("<option>"+phoneMenufacturers[index++]+"</option>")
document.write("<option>"+phoneMenufacturers[index++]+"</option>")
document.write("<option>"+phoneMenufacturers[index++]+"</option>")
document.write("</select>")
// end 











