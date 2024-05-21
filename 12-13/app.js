// CHAPTER 12-13 
// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).
// var character = prompt("Enter any letter or number to check whether it's number, uppercase letter or lowercase letter")
// // write forumla for checking 
// var valueFormula = character.charCodeAt(0);
// if (valueFormula >=65 && valueFormula <=90){
//     alert("It's in Uppercase!!");
// }
// else if (valueFormula >=97 && valueFormula <=122 ) {
//     alert("It's in Lowercase!");
// }
// else if (valueFormula >=48 && valueFormula <= 57){
//     alert("It's a number");
// }
// else{
//     prompt("Enter any letter or number to check whether it's number, uppercase letter or lowercase letter");
// }

// 2. Write a JavaScript program that accept two integers and
// display the larger. Also show if the two integers are equal.
// var value1 = +prompt("Enter the first number we will show which is larger");
// var value2 = +prompt("Your second number");
// if(value1 >= value2){
//     alert(value1 + " is greater than " + value2)
// }
// else if (value1 <= value2){
//     alert(value2 + " is larger than the "+ value1)
// };

// 3. Write a program that takes input a number from user &
// state whether the number is positive, negative or zero.
// var userNum = +prompt("Enter any number we will show whether it's negative or positive");
// if (userNum >= 1){
//     alert("It's positive")
// }
// else if (userNum <= -1){
//     alert ("It's negative!")
// }
// else if (userNum == 0){
//     alert("it's equal to 0")
// }
// else{
//    alert("Please reload the page and enter the number")
// }

// 4. Write a program that takes a character (i.e. string of
// length 1) and returns true if it is a vowel, false otherwise
// var vowelConfirmation = prompt("Write letter to check whether it's vowel or not");
// if (vowelConfirmation == "a" || vowelConfirmation == "e" || vowelConfirmation == "i" || vowelConfirmation == "o" || vowelConfirmation == "u"){
//     alert("it's a vowel!")
// }
// else{
//     alert("It's not vowel sorry!")
// }
// 5. Write a program that
// a. Store correct password in a JS variable.
// b. Asks user to enter his/her password
// c. Validate the two passwords:
// i. Check if user has entered password. If not, then
// give message “ Please enter your password”
// ii. Check if both passwords are same. If they are
// same, show message “Correct! The password you
// entered matches the original password”. Show
// “Incorrect password” otherwise.
// var myPassword = "coding2024";
// var userEnteredPass = prompt("Enter your password")
// if (userEnteredPass == myPassword){
//     alert("Logged in successfully!!")
// }
// else if (userEnteredPass == ""){
//     alert("Please enter your password to login the site"); 
//     var userEnteredPass = prompt("Enter your password");
//     if (userEnteredPass == myPassword){
//         alert("Logged in successfully!!")
//     }
//     else if (userEnteredPass != myPassword){
//         alert("Please enter the correct password")
//     }
    

// }
// else if (userEnteredPass != myPassword){
//     alert("Please enter the correct password")
// }
// question is can we keep showing the loop if they won't enter the password?
// yes by using loop function while 
// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = +prompt("enter number");
// if (hour <= 18) {
// greeting = "Good day";
// alert(greeting)
// }
// else{
// greeting = "Good evening";
// alert(greeting);
// }
// 7. Write a program that takes time as input from user in 24
// hours clock format like: 1900 = 7pm. Implement the
// following case using if, else & else if statements
// ============TIME IN 0000 24H FORMAT =====================
// var time = +prompt("Enter the time in 24-hour format (e.g., 0000 for 12 AM):");


// if (time >= 0 && time < 1200) {
//     alert("Good morning!");
// } else if (time >= 1200 && time < 1700) {
//     alert("Good afternoon!");
// } else if (time >= 1700 && time < 2100) {
//     alert("Good evening!");
// } else if (time >= 2100 && time <= 2359) {
//     alert("Good night!");
// } 
// else {
//     alert("Invalid time entered. Please enter a time between 0000 and 2359."+ "<br>" +
//         "exmaple: 0000 is 12 am"
//     );
// }
// ======================== END OF CHAP =============================



