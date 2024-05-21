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
var value1 = +prompt("Enter the first number we will show which is larger");
var value2 = +prompt("Your second number");
if(value1 >= value2){
    alert(value1 + " is greater than " + value2)
}
else if (value1 <= value2){
    alert(value2 + " is larger than the "+ value1)
};