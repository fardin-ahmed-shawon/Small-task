var num = 20;

num = toString(num)
document.write(typeof(num));

document.write("</br>");

// Integer (Full number value)

var first = "25";

first = parseInt(first);
document.write(typeof(first));

document.write("</br>");

// Float (If number with point value)

var second = "30.5"

second = parseFloat(second);
document.write(typeof(second));

document.write("</br>");

// To Fixed Method (Will resturn String)

var third = 2.5678;
document.write(third.toFixed());

document.write("</br>");

var fourth = 2.5678;
document.write(fourth.toFixed(3));

document.write("</br>");

// To Precision Method (Will resturn String)

var fifth = 2.5678;
document.write(fifth.toPrecision(2));

document.write("</br>");

// Number Method (Always Trasform to Integer)

document.write(Number("12"));
document.write("</br>");
document.write(typeof(Number("12")));

document.write("</br>");

document.write(Number("      12.5"));

document.write("</br>");

// Boolean 

document.write(Number(true));
document.write("</br>");
document.write(Number(false));


