// ======================Loops========================

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.
var table = +prompt("Enter any number to get the table of it");
var howManyTimes = +prompt("How many time you want it to multiply");
document.write(
    "<h1> Table of "+table+"</h1>"+"<br>")
for(var i = 1; i<=howManyTimes ;i++){
    document.write(
        table+ " x " + i + " = " + (table*i) +"<br>")
};
// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// answer a 
document.write(
    "<h1> Counting"+"</h1>"+"<br>")
for(var i = 1;i<=15; i++){
    document.write(
         i +"," 
    )
};
// answer b 
document.write(
    "<h1> Reverse Counting"+"</h1>"+"<br>")
for(var i = 10;i>=1; i--){
    document.write(
         i +"," 
    )
};
// answer c
document.write(
    "<h1> Even"+"</h1>"+"<br>")
for(var i = 0;i<=10; i++){ //the condition means the times value will be loop 
    document.write(
         i*2 +"," 
    )
};
// answer d
document.write(
    "<h1> Odd"+"</h1>"+"<br>")
for(var i = 0;i<=9; i++){ //the condition means the times value will be loop 
    document.write(
         (i*2)+1 +"," 
    )
};
// answer e
document.write(
    "<h1> Series"+"</h1>"+"<br>")
for(var i = 1;i<=10; i++){ //the condition means the times value will be loop 
    document.write(
         i*2 +"k," 
    )
};



