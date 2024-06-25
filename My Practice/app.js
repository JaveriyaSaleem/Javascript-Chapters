// =======Loop of stars Star pattern ======
// increment
// for (var i = 0; i<=10; i++){
//     for(var j=0; j<=i; j++){
//         document.write("*");
//     }

// document.write("<br>");

// }
// document.write("<br>");
// decrement 
// for (var i = 10; i>=0; i--){
//     for (var j=i; j>=0; j--){
//         document.write("*");

//     }
//     document.write("<br>");
// }

//  pyramid

// for (var i = 1; i <= 11; i++) {
//     for (var j = 11; j > i; j--) {
//       document.write(" &nbsp ");
//     }
//     for (var k = 1; k <= 2 * i - 1; k++) {
//       document.write("*");
//     }
//     document.write("<br>");
//   }
// counting 
// for (var i = 1; i <= 100; i= i+10){
// for (var j = i; j < i+10; j++){
    
//      document.write(j+" ");
//       }
//     document.write("<br>");
    
//     }
    // counting 1 to 5 5 row 
    // for (var i=1; i<6;i++){
    //     for(var j=1;j<=i;j++){
    //         document.write(j);
    //         }
    //     document.write("<br>");
    //     }

        // // reverse 
        // for (var a=5; a<=5;a--){
        //     for(var b=5; b>=a;b++){
        //         document.write(b);
        //         }
        //     document.write("<br>");
        //         }
                // another 
        // for (var i=1; i<=5; i++){
        //     for(var j=1; j<=i; j++){
        //         document.write(j);
        //         }
        //     document.write("<br>");
        // }
        // reverse 
        //  for (var i=5; i>=1; i--){
        //     for(var j=5; j>=1; j--){ 
        //         document.write(j);
        //         }
        //     document.write("<br>");
        // }
        // when we print this comes     we want 
        // 54321                      // 54321
        // 54321                      // 4321
        // 54321                      // 321
        // 54321                      // 21
        // 54321                      // 1
     
                // for (var i=5; i>=1; i--){
                //     for(var j=i; j>=1; j--){ 
                //         document.write(j);
                //         }
                //     document.write("<br>");
                // }
// for (var i=0;i<10;i++){

//     for (var j=0; j<=i;j++){
//         document.write("*");
//         }
//     document.write("<br>");
//     }

    // for (var j=0; j<=i;j++){
    //     document.write("*");
    //     }
    // document.write("<br>");
    // }

// document.write("<br>");
// for (var i=10;i>=1;i--){
//     for (var j=1; j<=i;j++){
//         document.write("*");
//         }
//     document.write("<br>");
//     }

    // for (var i=1; i<=5;i++){
    //     for (var k=1;k<=9-i;k++){
    //         document.write("&nbsp;");
    //     }
    //     for(var j=1; j<=i; j= j++*2+1){
    //         document.write("*");
    //         }
    //     document.write("<br>");
    // }
// var arrayOne = [[1,2,3],[4,5,6],[7,8,9]]; //three array [0[0,1,2],1[0,1,2],2[0,1,2]]
// var arrayTwo = [[9,2,1],[2,2,1],[2,2,3]];
// var finalArray= [];
// for (var i=0; i<arrayOne.length;i++){
//     for (var j=0; j<arrayOne[i].length;j++){
//         finalArray= arrayOne[i][j]+arrayTwo[i][j];
//     document.write(finalArray);
//     }
// document.write("<br>");


// // }
// var myArray = ["Javeriya","Jiya","Cat","Kitten"];

// }
// var myArray = ["Javeriya","Umer","Cat","Kitten"];

// var newOne = myArray.slice(1,3);
// console.log("After Slice "+newOne);
// myArray.splice(0,2,"Lion","Cub");
// console.log("After Addition by splice "+myArray);

// myArray = myArray[1];
// console.log(myArray);
// myArray.push("Family");
// console.log(myArray);


// Palidrome program 
// var userInput = prompt("Enter any word we will check whether it's palidrome or not"); //"Wow";
// var forLowerCase = userInput.toLowerCase();
// console.log(forLowerCase); //wow
// var converting2Array = forLowerCase.split("");
// console.log(converting2Array); //array
// var reverseArray = converting2Array.reverse();
// console.log(reverseArray);
// var reverse2String = reverseArray.join("");
// console.log(reverse2String);
// if(forLowerCase == reverse2String){
//     alert("Yeah hat's palindrome!");
// }
// else{
//     alert("It's not palindrome :(");
// }

// The statement assigns the number of elements in the array to the variable. Fill in the blank.
// var myArray = ["My ","Name"];
// var myVar = myArray.length;
// console.log(myVar);

// for (var i=1; i<=5; i++){
//     for (var j=1; j<=5; j++){
//         for (var k=1; k<=5; k++){
//         console.log("i "+i+" j "+j+" k "+k)
//         }
//     }
// }
// counting 
// for (var i=1; i<=100;i= i+10){
//   // 
//    for(var j = i;j<=i+9;j++){
//     document.write(j+" ");
   
//    }
//    document.write("<br>");
// }
// chap 21
// ==========FIRST LETTER TURNING INTO UPPER CASE ===============
// how to convert first letter of every word capital 
// var userInput = prompt("Enter Your Full Name here"); //javeriya saleem
// console.log(userInput);
// var addingAll = [];
// // user must be putting space in between so let's convert it to array 
// var convert2Array = userInput.split(" "); 
// console.log(convert2Array); //convert to array so we can check the index number
// var newOne =[]; //will put output here
// for (var i=0; i<convert2Array.length; i++){
//    console.log(convert2Array[i][0].toUpperCase);
//    var capitalizedWord = convert2Array[i][0].toUpperCase() + convert2Array[i].slice(1);
//    console.log(capitalizedWord);
//    addingAll.push(capitalizedWord);
//    console.log(addingAll);
   

// }
// var final = addingAll.join(" ");
// document.write("Your Name "+ final);
// ========================done!!!!!!!!!========================

// for making the first letter capital and rest small 

// ==== example para: "this is a sample paragraph to demonstrate the conversion to title case. it includes various words and sentences to test the functionality of the script. feel free to use this as an example."=====

// var userInput = prompt("enter your data here we will write it in title case"); 
//==== indexing to access every letter we can do this by array
// var convertToArray = userInput.split(" ");
// console.log(convertToArray); //==converted to array
// var array2add = [];
// for (var i=0; i<convertToArray.length; i++){
// === we want to access nested array means [0["j","a"]]  
//    var formating2TitleCase = convertToArray[i][0].toUpperCase()+convertToArray[i].slice(1).toLowerCase();
//    console.log(formating2TitleCase);
//   array2add.push(formating2TitleCase);
// }
// var convert2String = array2add.join(" ");
// document.write(convert2String);

// ==end 

// var myName = "javeriya muhammad saleem";
// var cap = myName[0].toUpperCase()+myName.slice(1);
// console.log(cap);
var str =  "SMIT SAYLANI SMIT SMIT Saylani SMIT " //storing index in any other var
var find = "SMIT";
var replaceWord = "Sayloni";
var count = 0;
var oneMore = ""
for (var i =0; i<str.length;i++){
  oneMore= str.slice(i,i+find.length);
  if(oneMore === find){
    count++
    if(count===3){
        str=str.slice(0,i)+replaceWord+str.slice(i+find.length)
        console.log(str)
    }

  }
}
// console.log(str.slice(i,i+4))







                

        

 
