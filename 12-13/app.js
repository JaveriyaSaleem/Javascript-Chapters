// CHAPTER 12-13 
// 1. Write a program that takes a character (number or string)
// in a variable & checks whether the given input is a
// number, uppercase letter or lower case letter. (Hint: ASCII
// codes:- A=65, Z=90, a=97, z=122).
var character = prompt("Enter any letter or number to check whether it's number, uppercase letter or lowercase letter")
// write forumla for checking 
var valueFormula = character.charCodeAt(0);
if (valueFormula >=65 && valueFormula <=90){
    alert("It's in Uppercase!!");
}
else if (valueFormula >=97 && valueFormula <=122 ) {
    alert("It's in Lowercase!");
}
else if (valueFormula >=48 && valueFormula <= 57){
    alert("It's a number");
}
else{
    prompt("Enter any letter or number to check whether it's number, uppercase letter or lowercase letter");
}