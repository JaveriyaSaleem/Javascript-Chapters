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

















