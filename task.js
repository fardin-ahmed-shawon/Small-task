var FirstName = prompt("Enter Your First Name: ");
var LastName = prompt("Enter Your Last Name: ");
var Birthdate = prompt("Enter your Birth Year: ");

// Full Name (String Addition)

var fullName = FirstName + LastName;

document.write("Your Full Name is: " + fullName);

document.write("</br>");

// Age (Number Addition) 

Birthdate = parseInt(Birthdate);

var currentYear = 2021;

var age = currentYear - Birthdate;

document.write("Your Current age is: "+ age);

document.write("</br>");

// Length (Total Character)

document.write("The total character of your name is: " + fullName.length);

document.write("</br>");

// Uppercase

document.write("Capital Letter of your full name: " + fullName.toUpperCase());

document.write("</br>");

// Alphabet Position

document.write("The Second Alphabet of your name is: " + fullName.charAt(1));

