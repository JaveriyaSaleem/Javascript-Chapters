// =========================CHAP 31 TO 24 =====================================
// 1. Write a program that displays current date and time in
// your browser.
// var date=new Date();
// document.write(date)
// 2. Write a program that alerts the current month in words.
// For example December.
// var date=new Date();
// var month=date.getMonth();

// mlist = [ "January", "Febmliruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
// document.write('Current Month :'+mlist[month])
// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

// var date=new Date();
// var day=date.getDay();
// var days =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
// document.write('Today is '+days[day])

// 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

// var date=new Date();
// var day=date.getDay();
// var days =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
// if(day==='Saturday'||day==='Saturday'){
//     alert("It's Fun day ")
// }
// else{
//     alert('Todayis not fun day ')
// }

// 5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”. 

// var datenow=new Date();
// var date=datenow.getDate();
// if(date<16){
//     document.write('First fifteen days of the month')
// }
// else{
//     document.write('last days of the month')
// }

// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.

// var dateNow=new Date();
// var millisec=dateNow.getTime();
// document.write('Current Date :'+dateNow+'<br>')
// document.write('ELasped milliseconds since January 1,1970 :'+millisec+'<br>')
// document.write("Elapsed minutes since January 1, 1970: " + (millisec/(999*60)) + "<br>");

// 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”. 

// var dateNow=new Date();
// var hours=dateNow.getHours();
// if(hours>12){
//     alert("It's AM")
// }
// else{
//     alert("It's PM")
// }

// 8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate. 

// var todayDate= new Date();
// var laterDate=new Date('31 Dec 2020');
// document.write(laterDate)

// 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015 

// var dateToday= new Date();
// var todayMilli=dateToday.getTime();
// var lastRamadan=new Date('June 18, 2015');
// var milliRamdan=lastRamadan.getTime();
// var diffMilliSec=todayMilli-milliRamdan;
// var days =Math.floor(diffMilliSec/(1000*60*60*24));
// document.write(days+' days have passed since Ist Ramadan,2015')

// 10. Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

// var dateNow=new Date();
// var todayMilli=dateNow.getTime();
// var year2015=new Date('1 Jan,2015');
// var milli2015=year2015.getTime();
// var diffMilliSec=todayMilli-year2015
// var seconds=Math.floor(diffMilliSec/(1000));
// document.write('On reference date :'+dateNow+'<br>'+' ,'+seconds+' seconds had passed since beginning of 2015')

// 11. Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser. 

// var today = new Date();
// var hoursAgo=today.getHours();
// hoursAgo=hoursAgo-1;
// document.write("current date: " + today + "<br>");
// today.setHours(hoursAgo);
// document.write("1 hour ago, it was " + today);

// 12. Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

// var today = new Date();
// var yearsAgo = today.getFullYear();
// yearsAgo = yearsAgo-100;
// document.write("current date: " + today + "<br>");
// today.setFullYear(yearsAgo);
// document.write("100 years back, it was " + today);

// 13. Write a program to ask the user about his age. Calculate and show his birth year in your browser. 

// var age=+prompt('Enter your age');
// var today= new Date();
// var yearNow=today.getFullYear();
// var birthYear=yearNow-age;
// document.write('Your age is '+age+'<br>'+' Your birth year is '+birthYear)

// 14. Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields: a. Customer Name b.

// var customerName='Tayyaba Ali';
// var today=new Date();
// var month=today.getMonth();
// mlist = [ "January", "Febmliruary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
// var noUnits=410;
// var chargePerunit=16;
// var netAmount=noUnits*chargePerunit;
// var lastCharge=350;
// var afterDueDate=netAmount+lastCharge;
// document.write('<h1>'+'K-Electric Bill'+'</h1>')
// document.write('Customer Name :'+customerName+'<br>');
// document.write('Month :'+mlist[month]+'<br>');
// document.write('Number of units :'+noUnits+'<br>');
// document.write('Charges per unit :'+chargePerunit+'<br>');
// document.write('<br>')
// document.write('Net Amount Payabale (Within Due Date) :'+netAmount+'<br>');
// document.write('Late payment surcharge :'+lastCharge+'<br>');
// document.write('Gross payment Payable(after Due Date) :'+afterDueDate+'<br>');



    // Working again
// 1. Write a program that displays current date and time in
// your browser. 
    var todaysDate = new Date();
    // document.write(todaysDate)

// 2. Write a program that alerts the current month in words.
// For example December.
  var getMonth = todaysDate.getMonth()
//   document.write(getMonth + "<br>")  
 var myMonths = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ];
//  document.write("Month: " + myMonths[getMonth]);

// 3. Write a program that alerts the first 3 letters of the current
// day, for example if today is Sunday then alert will show
// Sun.
var getDay = todaysDate.getDay();
// document.write(getDay);
var myDays = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// document.write("Today "+ myDays[getDay])

// 4. Write a program that displays a message “It’s Fun day” if
// its Saturday or Sunday today.
// var userInput = prompt("What's the day today?").toLowerCase();
//     if(userInput== "saturday"|| userInput=="sunday"){
//         document.write("It's a Fun Day!!")
        
//     }
// 5. Write a program that shows the message “First fifteen
// days of the month” if the date is less than 16th of the month
// else shows “Last days of the month”.
// var getDate = todaysDate.getDate();
// // document.write(getDate);
// if(getDate<16){
//     document.write("First Fifteen days of Month")
// }
// else{
//     document.write("Last Days of the Month")
// }
// 6. Write a program that determines the minutes since
// midnight, Jan. 1, 1970 and assigns it to a variable that
// hasn't been declared beforehand. Use any variable you like
// to represent the Date object.
// document.write(todaysDate + "<br>");
// var getMili = todaysDate.getTime();
// document.write("Elapsed milliseconds since January 1, 1970: "+getMili+"<br>");
// document.write("Elapsed minutes since January 1, 1970: "+(getMili/(1000*60)))

// 7. Write a program that tests whether it's before noon and
// alert “Its AM” else “its PM”.
// var hourRN = todaysDate.getHours();

// if(hourRN <12){
//     document.write("Time is "+todaysDate.toLocaleDateString()+ " it's AM")
// }
// else{
//     document.write("Time is "+ todaysDate.toLocaleTimeString()+" it's PM")
// }
// 8. Write a program that creates a Date object for the last day
// of the last month of 2020 and assigns it to variable named
// laterDate.

// var letterDate = new Date("31 Dec 2020");
// document.write(letterDate);
// 9. Create a date object of the starting date of this Ramadan
// and alert the number of days past since 1st Ramadan?
// Note: 1st Ramadan was on June 18, 2015
// var todayMili = todaysDate.getTime();
// var ramadanDate = new Date("18 June 2015");
// var ramadanMili = ramadanDate.getTime();
// var minusss = todayMili-ramadanMili;

// document.write(Math.floor(minusss/(1000*60*60*24))+ " days have been passed")

// 10. Write a program that displays in your browser the
// seconds that elapsed between the reference date and the
// beginning of 2015.
// var refereneceDate = new Date("5 Dec 2015");
// var anotherDate = new Date("1 Jan 2015");
// var referenceMili = refereneceDate.getTime();
// var anotherMili = anotherDate.getTime();
// var difference = referenceMili-anotherMili
// document.write("On Reference Date "+ refereneceDate +"  "+ Math.floor(difference/(1000*60))+" have been passed since begining of 2015")

// 11. Create a Date object for the current date and time.
// Extract the hours, reset the date object an hour ahead and
// finally display the date object in your browser.
// document.write("Current Date: "+ todaysDate +"<br>")
// var todyhrs = todaysDate.getHours()-1;
// // document.write(todyhrs);
// var settingHrs = todaysDate.setHours(todyhrs);
// document.write("Last Hour: "+todaysDate)

// 12. Write a program that creates a date object and show the
// date in an alert box that is reset to 100 years back?


