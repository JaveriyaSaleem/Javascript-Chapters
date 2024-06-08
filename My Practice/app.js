// =======Loop of stars Star pattern ======
// increment
for (var i = 0; i<=10; i++){
    for(var j=0; j<=i; j++){
        document.write("*");
    }

document.write("<br>");

}
document.write("<br>");
// decrement 
for (var i = 10; i>=0; i--){
    for (var j=i; j>=0; j--){
        document.write("*");

    }
    document.write("<br>");
}

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
for (var i = 1; i <= 100; i= i+10){
for (var j = i; j < i+10; j++){
    
     document.write(j+" ");
      }
    document.write("<br>");

}

 
