// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.
// var firstName = prompt("Enter your first name here");
// var secondName = prompt("Enter your second name here");
// var fullName = firstName+" "+secondName
// alert("Hi "+fullName+ ", hope your day is going well💗");


// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser
// var userFavPhone = prompt("What's your favourite mobile phone model?");
// document.write("My Favourite Mobile Phone Model is "+userFavPhone+"<br>"+
//     "Lenght of string is: "+userFavPhone.length
// )
// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .
//var nationality = "Pakistani"; //used in question 5 as well
// var indexOfChecking =nationality.indexOf("n");
// console.log(indexOfChecking)
// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.
// var word2Display = "Hello World";
// document.write("String: "+word2Display+ "<br>"+
//     "Last index of 'l': "+word2Display.lastIndexOf("l")
// )
// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.
// document.write("String: "+nationality+"<br>"+
//     "Character at index 3: "+  nationality.charAt(3)
// )
// 6. Repeat Q1 using string concat() method.
// .concat will be use before the thing that has to concate
var firstName = prompt("Enter your first name here");
var secondName = prompt("Enter your second name here");
var fullName = firstName.concat(" ").concat(secondName);
alert("Hi "+fullName+ ", hope your day is going well💗");




