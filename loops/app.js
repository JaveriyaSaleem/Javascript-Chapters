// ======================Loops========================
// =======================Question 1============================
// 1. Declare and initialize an empty multidimensional array.
// (Array of arrays)
// var aMultidimensional = [[]];
// =======================Question 2============================
// 2. Declare and initialize a multidimensional array
// representing the following matrix:
// aMultidimensional = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// nested loop method :

// for (var i = 0; i<aMultidimensional.length;i++){
    
//     for(var j=0; j<aMultidimensional[i].length;j++){
//         document.write(aMultidimensional[i][j])
//     }
//     document.write("<br>");
// }
// with converting the 2nd means 2d array into string method:
// for (var i=0; i<aMultidimensional.length;i++){
//     document.write(aMultidimensional[i].join(" ")+"<br>")
// }

// it's 3d 
// var aMultidimensional = [[[0,1,2,3]],[[1,0,1,2]],[[2,1,0,1]]];
// for (var i = 0;i<aMultidimensional.length;i++){
//     document.write(aMultidimensional[i][0].join(" ")+"<br>")
// }

 // =======================Question 3============================
// 3. Write a program to print numeric counting from 1 to 10.
// for (var i = 1; i<=10;i++){
//     document.write(i+"<br>")
// }    
 // =======================Question 4============================
// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
// var table = +prompt("Enter any number to get the table of it");
// var howManyTimes = +prompt("How many time you want it to multiply");
// document.write(
//     "<h1> Table of "+table+"</h1>"+"<br>")
// for(var i = 1; i<=howManyTimes ;i++){
//     document.write(
//         table+ " x " + i + " = " + (table*i) +"<br>")
// };
// =======================Question 5============================
// 5. Write a program to print items of the following array
// using for loop:
// var fruits = ["apple", "banana", "mango", "orange","strawberry"];
// for (var i=0; i<fruits.length;i++){
//     document.write(fruits[i]+"<br>")
// }

// =======================Question 6============================
// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// answer a 
// document.write(
//     "<h1> Counting"+"</h1>"+"<br>")
// for(var i = 1;i<=15; i++){
//     document.write(
//          i +"," 
//     )
// };
// answer b 
// document.write(
//     "<h1> Reverse Counting"+"</h1>"+"<br>")
// for(var i = 10;i>=1; i--){
//     document.write(
//          i +"," 
//     )
// };
// answer c
// document.write(
//     "<h1> Even"+"</h1>"+"<br>")
// for(var i = 0;i<=10; i++){ //the condition means the times value will be loop 
//     document.write(
//          i*2 +"," 
//     )
// };
// answer d
// document.write(
//     "<h1> Odd"+"</h1>"+"<br>")
// for(var i = 0;i<=9; i++){ //the condition means the times value will be loop 
//     document.write(
//          (i*2)+1 +"," 
//     )
// };
// answer e
// document.write(
//     "<h1> Series"+"</h1>"+"<br>")
// for(var i = 1;i<=10; i++){ //the condition means the times value will be loop 
//     document.write(
//          i*2 +"k," 
//     )
// };
// =======================Question 7============================
// 7. You have an array
// var A = ["cake", "apple pie", "cookie", "chips", "patties"]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:
// var userInputForChecking = prompt("What do you want to order Maam/Sir");
// var myWrongVar = false;
// var user = userInputForChecking.toLowerCase();
// for(var i = 0; i<A.length;i++){
// if (user==A[i]){
//     alert(userInputForChecking +" is available at index "+ i+" in our bakery!")
//     myWrongVar=true; //it means the condition is true
    
// }
           
// }
// if(myWrongVar==false){
//         alert("sorry the item you entered isn't available in our bakery")
        
//     }
// =======================Question 8============================
// 8. Write a program to identify the largest number in the
// given array.
// if (userInputForChecking == )



