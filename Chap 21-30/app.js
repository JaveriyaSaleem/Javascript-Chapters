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
// var firstName = prompt("Enter your first name here");
// var secondName = prompt("Enter your second name here");
// var fullName = firstName.concat(" ").concat(secondName);
// alert("Hi "+fullName+ ", hope your day is going well💗");
// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.
// var cityName = "Hyderabad";
// document.write(
//     "City: "+ cityName +"<br>"+
//     "After Replacement: "+ cityName.replace("Hyderabad","Islamabad")
// )
// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("Program before: "+ message + "<br>"+
//     "After replacing and to &: "+ message.replaceAll("and","&")
// )
// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.
// var valueinStr = "472";
// var converted2Str = +valueinStr
// document.write("Value "+valueinStr+ "<br>"+
//     "Type "+ typeof(valueinStr)+ "<br>"+
//     "Value "+ converted2Str+"<br>"+
//     "Type "+typeof(converted2Str)

//  )
// 10. Write a program that takes user input. Convert and
// show the input in capital letters.
// var userInput = prompt("Enter your word that need to get capatilized");

// document.write("User Input: "+userInput+"<br>"+
//     "Upper Case: "+userInput.toUpperCase()
// )
// 11. Write a program that takes user input. Convert and
// show the input in title case.
// var userInput = prompt("Enter anything to turn into title case");
// document.write("  ")
// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// var toStringConvert = num.toString()
// var removeDot = toStringConvert.replace(".","")
// // Remove the dot to display “3536” display in your browser.
// document.write(
//     "Value: "+num+"<br>"+
//     "Type: "+ typeof(num) + "<br>"+
//     "Value after converting to string and removing dot: "+ removeDot+ "<br>"+
//     "Type: "+ typeof(removeDot)
// )
// done!
// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64
// SPECIAL CHARACTERS DETECTION IN USERNAME 
// var userName = prompt("Enter your username")
// var flagF = false;
// for (var i=0; i<userName.length; i++){
//     console.log(userName[i])
//     if(userName[i]=="!" || userName[i]==="@" || userName[i]=="#" || userName[i]=="$" || userName[i]=="%" || userName[i]=="^" || userName[i]=="&" || userName[i]=="*"){
//         alert("Incorrect Username special characters aren't allowed!")
//         flagF = true;
//         break;
    
//     }   
// }
// if (flagF=== false){
//     alert("your username is "+userName)
// }
// ======== another way =======
// var userInput=prompt('Enter your name: ');
// var charCode;
// for(var i=0;i<userInput.length;i++){
//     charCode=userInput.charCodeAt(i);
//      if(charCode===33||charCode===44||charCode===46||charCode===64){
//         alert("Please enter a valid username, special character aren't allowed")
//      }

// }
// 14. You have an array
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// var userInput = prompt("What do you wanna order?")
// var capatilizedInput = userInput.toLowerCase();
// console.log(capatilizedInput);
// var checkingFlag = false;
// for(var i = 0; i< A.length;i++){
//     console.log(A[i])
//     if (capatilizedInput=== A[i]){
//         alert("Available for order at index "+i)
//         checkingFlag=true;
        
//     }
// }
// if(checkingFlag===false){
//     alert("Item not available in our bakery")
// }
// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// prompt("Enter your password here:\na. It should contain alphabets and numbers \n"+
//     "b. It should not start with a number \n"+
//     "c. It must at least 6 characters long");
//     consider password abc123
// var userInput = prompt("Enter your password:"); // Prompting user for input
// var hasAlphabet = false;
// var hasNumber = false;
// var isValidLength = userInput.length >= 6;
// var startsWithNumber = userInput.charCodeAt(0) >= 48 && userInput.charCodeAt(0) <= 57;

// for (var i = 0; i < userInput.length; i++) {
//     var charCode = userInput.charCodeAt(i);
    
//     if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
//         hasAlphabet = true;
//     }
    
//     if (charCode >= 48 && charCode <= 57) {
//         hasNumber = true;
//     }
// }

// if (isValidLength && !startsWithNumber && hasAlphabet && hasNumber) {
//     alert("Password saved successfully!!");
// } else {
//     console.log("Please fulfill all requirements!");
// }
// 16. Write a program to convert the following string to an
// array using string split method.

// Display the elements of array in your browser.
// var university = "University of Karachi";
// var arrayConversion = university.split("")
// console.log(arrayConversion);
// 17. Write a program to display the last character of a user
// input.
// var input1 = "Pakistan";
// document.write(input1.charAt(input1.length-1))
// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.
// var textProvided = "The quick brown fox jumps over the lazy dog";
// var changeCase = textProvided.toLowerCase();
// var count = 0;
// for (var i=0; i<changeCase.length;i++){
// var cutted = changeCase.slice(i,i+3);
// if(cutted === "the" ){
//         console.log("Milgaya")
//         count++

// }

// }
// document.write("Text: "+textProvided+"<br>"+
//         "There are "+count +" occurence of word “the” "
// )
// ============  till chap 21 -25 end  ===========
// =================== FROM CHAP 26 TO 30 =====================
//                               MATH METHODS 
// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
// var userInput = 3.658;
// document.write("Number: "+ Number(userInput) + "<br>"+
//     "Round off: "+ Math.round(userInput) + "<br>"+
//     "Floor: "+ Math.floor(userInput) +"<br>"+
//     "Ceil: "+Math.ceil(userInput)
// )

// 2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number
// var userInput = -2.673;
// document.write("Number: "+ Number(userInput) + "<br>"+
//     "Round off: "+ Math.round(userInput) + "<br>"+
//     "Floor: "+ Math.floor(userInput) +"<br>"+
//     "Ceil: "+Math.ceil(userInput)
// )
// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var number = 15;
// number = Number(number);
// var absoluteValue = Math.abs(number);
// alert("The absolute value of " + number + " is " + absoluteValue);
// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:
// var randomDice = Math.ceil(Math.random() * 6);
// document.write("Dice Value 1: "+randomDice+"<br>")
// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser
// var randomDice = Math.ceil(Math.random() * 2);
// if (randomDice=== 1){
//     document.write(randomDice+"<br>"+
//         "random coin value: Heads"
//     )
// }
// else if(randomDice===2){
//     document.write(randomDice+"<br>"+
//         "random coin value: tails"
//     )
// }
// 6. Write a program that shows a random number between 1
// and 100 in your browser.
// document.write(
//     "Random number between 1 and 100: "+ Math.ceil( Math.random() * 100)
// )
// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms
// var userInput = prompt("Enter your weight in kgs");
// var weight = parseFloat(userInput);
// document.write(weight)
// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.
// var randomNum = Math.ceil(Math.random()*10);
// var userInput = prompt("Guess any number ranging from 1 to 10");
// if(userInput==randomNum){
//     alert("congrats you guessed the write number")
// }
// else(
//     alert("Number was: "+ randomNum+" Try again:(")
// )



















