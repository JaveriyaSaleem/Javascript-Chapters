// chap 10 USER INPUT & CONDITIONAL STATEMENT
// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”
var userCity = prompt("Enter your city name");
if ( userCity ==="Karachi"){
    alert("Welcome to City of Lights!!");
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.
var userGender = prompt("Specify your Gender", "Male,Female");
if ( userGender === "Male"){
    alert("Good Morning Sir!!");
}
if ( userGender === "Female"){
    alert("Good Morning Ma'am!!");
};
// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:
var signalColor = prompt("Choose your road traffic signal color", "Red, Yellow, Green");
if ( signalColor === Red){
    document.write("Red!! Must Stop🤚");
}
if ( signalColor === Yellow){
    document.write("Ready to Move!!🚶‍♂️");
}
if ( signalColor === Green){
    document.write("Move Now!!🏃‍♂️");
}

