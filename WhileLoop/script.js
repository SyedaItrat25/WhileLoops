let n = +prompt("Enter the value of n");
let i = 0;
while(i<=n){
    document.write("<h2>" + i + "<br> </h2>");
    i++;
}
// sum of numbers
let sum = 0;
let num = 1;
while(num<=100){
sum += num; // sum = sum + num
num++;
}
document.write("Sum of 1 to 100 is: " + "<strong>" + sum + "</strong>");
// factorial of numbers
let number = 4;
let factorial = 1;
while(number<0){
    factorial = factorial * number;
    number--;
}
document.write("<br> Factorial of a number is: " + "<strong>" + factorial + "</strong>" )
// finding evev number
let evenNum = []
let ii = 1;
while(evenNum.length<10){
    if(ii%2===0){
        evenNum.push(ii);
    }
    ii++;
}
document.write("<br> The first Even numbers are: " + "<strong>" + evenNum + "</strong>")
// to display user input Validation
let userInput;
let password = "Syedaitrat25";
while (userInput!==password) {
    userInput = prompt("Enter password");
}
document.write(" <br> <h1>Access Granted!</h1>")
// generating Countdown
let countdown = 10;
while (countdown>0) {
    document.write("<br>" + countdown)
    countdown--;
}
document.write("<br>" + "<b>HAPPY NEW YEAR \u{1F973}	!!!!</b>");
