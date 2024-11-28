/* Warmup-1 -- sleepIn
The parameter weekday is true if it is a weekday, 
and the parameter vacation is true if we are on vacation. 
We sleep in if it is not a weekday or we're on vacation. 
Return true if we sleep in.*/

function sleepIn(weekday, vacation){
    return !weekday || vacation;
}

console.log(sleepIn(true, true));
console.log(sleepIn(true, false));
console.log(sleepIn(false, true));
console.log(sleepIn(false, false));

console.log("-------------------");

/* Warmup-1 -- monkeyTrouble
We have two monkeys, a and b, and the parameters 
aSmile and bSmile indicate if each is smiling. 
We are in trouble if they are both smiling or if neither 
of them is smiling. Return true if we are in trouble.*/

function monkeyTrouble(aSmile, bSmile){
    return aSmile === bSmile;
}

console.log(monkeyTrouble(true, true));
console.log(monkeyTrouble(true, false));
console.log(monkeyTrouble(false, true));
console.log(monkeyTrouble(false, false));

console.log("-------------------");

/* Warmup-1 -- sumDouble
Given two int values, return their sum. 
Unless the two values are the same, then return double their sum.*/

function sumDouble(a, b){
    if(a === b){
        return (a + b) * 2;
    }
    return a + b;
}

console.log(sumDouble(2, 2));
console.log(sumDouble(4, 5));

//sprendimas su ternary operatosr

function sumDoubleTernary(a, b){
    return a === b ? (a + b) * 2 : a + b;
}

console.log(sumDoubleTernary(2, 2));
console.log(sumDoubleTernary(4, 5));

console.log("-------------------");

/* Warmup-1 -- diff21
Given an int n, return the absolute difference between n and 21, 
except return double the absolute difference if n is over 21.*/

function diff21(n){
    return n > 21 ? (n - 21) * 2 : Math.abs(n - 21); 
}

console.log(diff21(19));
console.log(diff21(10));
console.log(diff21(21));
console.log(diff21(24));

console.log("-------------------");

/* Warmup-1 -- parrotTrouble
We have a loud talking parrot. The "hour" parameter is the current 
hour time in the range 0..23. We are in trouble if the parrot is 
talking and the hour is before 7 or after 20. Return true if we are in trouble.*/

const parrotTrouble = (talking, hour) =>{
    return talking && (hour < 7 || hour > 20);
}

console.log(parrotTrouble(true, 6));
console.log(parrotTrouble(true, 7));
console.log(parrotTrouble(false, 6));

console.log("-------------------");

/* Warmup-1 -- makes10
Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.
*/

const makes10 = (a, b) =>{
    return (a === 10 || b === 10) || (a + b) === 10;
}

console.log(makes10(9, 10));
console.log(makes10(9, 9));
console.log(makes10(1, 9));

console.log("-------------------");

/* Warmup-1 -- nearHundred
Given an int n, return true if it is within 10 of 100 or 200.
Note: Math.abs(num) computes the absolute value of a number.
*/

const nearHundred = (n) =>{
    return Math.abs(100 - n) <= 10 || Math.abs(200 - n) <= 10;
}

console.log(nearHundred(93));
console.log(nearHundred(90));
console.log(nearHundred(89));
console.log(nearHundred(193));
console.log(nearHundred(290));
console.log(nearHundred(105));

console.log("-------------------");

/* Warmup-1 -- posNeg
Given 2 int values, return true if one is negative and one is positive.
Except if the parameter "negative" is true, then return true only if both are negative.
*/

const posNeg = (a, b, negative) =>{
    return ((a < 0 && b > 0) || (a > 0 && b < 0)) || (a < 0 && b < 0 && negative);
}

console.log(posNeg(1, -1, false));
console.log(posNeg(-1, 1, false));
console.log(posNeg(-4, -5, true));

console.log("Su ternary operator:");

const posNegTernary = (a, b, negative) => (negative ? a < 0 && b < 0 : (a < 0 && b > 0) || (a > 0 && b < 0));

console.log(posNegTernary(1, -1, false));
console.log(posNegTernary(-1, 1, false));
console.log(posNegTernary(-4, -5, true));

console.log("-------------------");

/* Warmup-1 -- notString
Given a string, return a new string where "not " has been added to the front.
However, if the string already begins with "not", return the string unchanged.
*/

const notString = (str) =>{
    return str.slice(0,3) == "not" ? str : `not ${str}`;
}

console.log(notString("candy"));
console.log(notString("x"));
console.log(notString("not bad"));

console.log("Optimaliau su starts.With:");

const notStringStartsWith = (str) => str.startsWith("not") ? str : `not ${str}`;

console.log(notStringStartsWith("candy"));
console.log(notStringStartsWith("x"));
console.log(notStringStartsWith("not bad"));

console.log("-------------------");

/* Warmup-1 -- missingChar
Given a non-empty string and an int n, return a new string where 
the char at index n has been removed. The value of n will be a valid 
index of a char in the original string 
(i.e. n will be in the range 0..str.length()-1 inclusive).
*/

const missingChar = (str, n) =>{
   return str.slice(0, n) + str.slice(n + 1, str.length);
}

console.log(missingChar('kitten', 1));
console.log(missingChar('kitten', 0));
console.log(missingChar('kitten', 4));

console.log("Sutrumpintas variantas:")

const missingCharShort = (str, n) => str.slice(0, n) + str.slice(n + 1);

console.log(missingCharShort('kitten', 1));
console.log(missingCharShort('kitten', 0));
console.log(missingCharShort('kitten', 4));



