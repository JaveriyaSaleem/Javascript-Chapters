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
for (var i=0;i<10;i++){
    for (var j=0; j<=i;j++){
        document.write("*");
        }
    document.write("<br>");
    }
document.write("<br>");
for (var i=10;i>=1;i--){
    for (var j=1; j<=i;j++){
        document.write("*");
        }
    document.write("<br>");
    }

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

// }
var myArray = ["Javeriya","Umer","Cat","Kitten"];
var newOne = myArray.slice(1,3);
console.log("After Slice "+newOne);
myArray.splice(0,2,"Lion","Cub");
console.log("After Addition by splice "+myArray);
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





                

        

 
