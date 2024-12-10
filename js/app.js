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

console.log("=============================");

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

console.log("=============================");

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

console.log("=============================");

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

console.log("=============================");

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

console.log("=============================");

/* Warmup-1 -- makes10
Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.
*/

const makes10 = (a, b) =>{
    return (a === 10 || b === 10) || (a + b) === 10;
}

console.log(makes10(9, 10));
console.log(makes10(9, 9));
console.log(makes10(1, 9));

console.log("=============================");

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

console.log("=============================");

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

console.log("=============================");

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

console.log("=============================");

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

console.log("=============================");

/* Warmup-1 -- frontBack
Given a string, return a new string where the first and last chars
have been exchanged.
 */

const frontBack = (str) => {
    if(str.length <= 1) {
        return str;
    }
    let firstLetter = str[0];
    let lastLetter = str[str.length - 1];
    return lastLetter + str.slice(1, - 1) + firstLetter;
}

console.log(frontBack('code'));
console.log(frontBack('a'));
console.log(frontBack('ab'));

console.log("=============================");

/*Warmup-1 -- front3
Given a string, we'll say that the front is the first 3 chars 
of the string. If the string length is less than 3, the front 
is whatever is there. Return a new string which is 3 copies of the front.
*/

const front3 = (str) =>{
    if(str.length < 3){
        return str;
    }
    return str.slice(0, 3) + str.slice(0, 3) + str.slice(0, 3);
}

console.log(front3('Java'));
console.log(front3('Chocolate'));
console.log(front3('abc'));
console.log(front3('ab'));

const front3Repeat = (str) => {
    return str.length < 3 ? str : (str.slice(0, 3)).repeat(3);
} 

console.log(front3Repeat('Java'));
console.log(front3Repeat('Chocolate'));
console.log(front3Repeat('abc'));
console.log(front3Repeat('ab'));

console.log("=============================");

/*Warmup-1 -- backAround
Given a string, take the last char and return a new string 
with the last char added at the front and back, so 'cat' yields 
'tcatt' The original string will be length 1 or more.
*/

const backAround = (str) => {
    const lastChar = str.slice(str.length - 1);
    return lastChar + str + lastChar;
}

console.log(backAround('cat'));
console.log(backAround('Hello'));
console.log(backAround('a'));

const backAroundShort = (str) => str.slice(-1) + str + str.slice(-1);

console.log(backAroundShort('cat'));
console.log(backAroundShort('Hello'));
console.log(backAroundShort('a'));

console.log("=============================");

/*Warmup-1 -- or35
Return true if the given non-negative number is a multiple 
of 3 or a multiple of 5. (Hint: Use the % 'mod' operator)
*/

const or35 = (n) => n % 3 === 0 || n % 5 === 0;

console.log(or35(3));
console.log(or35(10));
console.log(or35(8));

console.log("=============================");

/*Warmup-1 -- front22
Given a string, take the first 2 chars and return the 
string with the 2 chars added at both the front and back, 
so 'kitten' yields 'kikittenki' chars are there.
*/

const front22 = (str) => str.slice(0, 2) + str + str.slice(0, 2);

console.log(front22('kitten'));
console.log(front22('Ha'));
console.log(front22('abc'));

console.log("=============================");

/*Warmup-1 -- startHi
Given a string, return true if the string starts with 'hi'and false otherwise.
*/

const startHi = (str) => str.slice(0, 2) === 'hi';

console.log(startHi('hi there'));
console.log(startHi('hi'));
console.log(startHi('hello hi'));

console.log("Optimaliau su starts.With:");

const startHiStartsWith = (str) => str.startsWith('hi');

console.log(startHiStartsWith('hi there'));
console.log(startHiStartsWith('hi'));
console.log(startHiStartsWith('hello hi'));

console.log("=============================");

/*Warmup-1 -- icyHot
Given two temperatures, return true if one is less 
than 0 and the other is greater than 100.
*/

const icyHot = (temp1, temp2) => (temp1 < 0 && temp2 > 100) || (temp1 > 100 && temp2 <0);

console.log(icyHot(120, -1));
console.log(icyHot(-1, 120));
console.log(icyHot(2, 120));

console.log("=============================");

/*Warmup-1 -- in1020
Given 2 int values, return true if either of them is in the range 10..20 inclusive.
*/

const in1020 = (a, b) => (a >= 10 && a <= 20) || (b >=10 && b <=20);

console.log(in1020(12, 99));
console.log(in1020(21, 12));
console.log(in1020(8, 99));

console.log("=============================");

/*Warmup-1 -- hasTeen
We'll say that a number is 'teen' if it is in the range 13..19 inclusive. 
Given 3 int values, return true if 1 or more of them are teen.
*/

const hasTeen = (a, b, c) => 
    (a >= 13 && a <= 19) || (b >=13 && b <=19) || (c >= 13 && c <=19);

console.log(hasTeen(13, 20, 10));
console.log(hasTeen(20, 19, 10));
console.log(hasTeen(20, 10, 13));
console.log(hasTeen(13, 13, 19));
console.log(hasTeen(1, 3, 9));

console.log("=============================");

/*Warmup-1 -- loneTeen
We'll say that a number is 'teen' if it is in the range 13..19 inclusive. 
Given 2 int values, return true if one or the other is teen, but not both.
*/

const loneTeen = (a, b) => 
((a >= 13 && a <= 19) && (b < 13 || b > 19)) || ((a < 13 || a > 19) && (b >= 13 && b <= 19));

console.log(loneTeen(13, 99));
console.log(loneTeen(21, 19));
console.log(loneTeen(13, 13));

console.log("=============================");

/*Warmup-1 -- delDel
Given a string, if the string "del" appears starting at index 1, 
return a string where that "del" has been deleted. Otherwise, 
return the string unchanged.
*/

const delDel = (str) => str.slice(1, 4) === 'del' ? str[0] + str.slice(4) : str;

console.log(delDel('adelbc'));
console.log(delDel('adelHello'));
console.log(delDel('abcdel'));

console.log("=============================");

/*Warmup-1 -- mixStart
Return true if the given string begins with 'mix', 
except the 'm' can be anything, so 'pix', '9ix' .. all count.
*/

const mixStart = (str) => str.slice(1, 3) === 'ix';

console.log(mixStart('mix snacks'));
console.log(mixStart('pix snacks'));
console.log(mixStart('piz snacks'));

console.log("=============================");

/*Warmup-1 -- startOz
Given a string, return a string made of the first 2 chars 
(if present), however include first char only if it is 'o' 
and include the second only if it is 'z', so 'ozymandias' yields 'oz'.
*/

const startOz = (str) =>{
    if(str.slice(0, 2) === 'oz'){
        return 'oz';
    }else if(str[0] === 'o'){
        return 'o';
    }else if(str[1] === 'z'){
        return 'z';
    }else{
        return '';
    }
}

console.log(startOz('ozymandias'));
console.log(startOz('bzoo'));
console.log(startOz('oxx'));

const startOzShort = (str) => {
    let result = '';
    if (str[0] === 'o') result += 'o';
    if (str[1] === 'z') result += 'z';
    return result;
}

console.log(startOzShort('ozymandias'));
console.log(startOzShort('bzoo'));
console.log(startOzShort('oxx'));
console.log(startOzShort('abc'));
console.log(startOzShort('zoo'));

console.log("=============================");

/*Warmup-1 -- intMax
Given three int values, a b c, return the largest.

intMax(1, 2, 3) → 3
intMax(1, 3, 2) → 3
intMax(3, 2, 1) → 3 */

const intMax = (a, b, c) => Math.max(a, b, c);

console.log(intMax(1, 2, 3));
console.log(intMax(1, 3, 2));
console.log(intMax(3, 2, 1));

console.log("=============================");

/*Warmup-1 -- close10
Given 2 int values, return whichever value is nearest 
to the value 10, or return 0 in the event of a tie. 
Note that Math.abs(n) returns the absolute value of a number.
*/

const close10 = (a, b) =>{
    if(Math.abs(10 - a) < Math.abs(10 - b)){
        return a;
    }else if(Math.abs(10 - a) > Math.abs(10 - b)){
        return b;
    }
        return 0;
}

console.log(close10(8, 13));
console.log(close10(13, 8));
console.log(close10(13, 7));

console.log("=============================");

/*Warmup-1 -- in3050
Given 2 int values, return true if they are both in the range 
30..40 inclusive, or they are both in the range 40..50 inclusive.
*/

const in3050 = (a, b) => 
    ((a >= 30 && a <= 40) && (b >= 30 && b <= 40)) ||
    ((a >= 40 && a <= 50) && (b >= 40 && b <= 50));

    console.log(in3050(30, 31));
    console.log(in3050(30, 41));
    console.log(in3050(40, 50));

console.log("=============================");

/*Warmup-1 -- max1020
Given 2 positive int values, return the larger value that is in 
the range 10..20 inclusive, or return 0 if neither is in that range.
*/

const max1020 = (a, b)=>{
    if(a >= b && a >= 10 && a <= 20){
        return a;
    }else if(b > a && b >= 10 && b <= 20){
        return b;
    }
        return 0;
}

console.log(max1020(15, 17));
console.log(max1020(19, 11));
console.log(max1020(11, 9));
console.log(max1020(9, 9));

const max1020Max = (a, b)=>{
    const isInRange = (n) => n >= 10 && n <= 20;
    const aInRange = isInRange(a) ? a : 0;
    const bInRange = isInRange(b) ? b : 0;
    return Math.max(aInRange, bInRange);
}

console.log(max1020Max(15, 17));
console.log(max1020Max(19, 11));
console.log(max1020Max(11, 9));
console.log(max1020Max(9, 9));

console.log("=============================");

/* Warmup-1 -- stringE
Return true if the given string contains between 1 and 3 'e' chars.
*/

const stringE = (str) => {
    //konvertuojame i masyva, o e raide pasirenkama, kaip skyriklis
    //reikia atimti 1, nes pvz. 2 e raides padalina i tris elementus
    const count = str.split('e').length - 1;
    return count >= 1 && count <= 3;
};

console.log(stringE('Hello'));
console.log(stringE('Heelle'));
console.log(stringE('Heelele'));

console.log("=============================");

/* Warmup-1 -- lastDigit
Given two non-negative int values, return true if they have 
the same last digit, such as with 27 and 57. Note that the % 'mod' 
operator computes remainders, so 17 % 10 is 7.
*/

const lastDigit = (a, b) =>{
    return a % 10 == b % 10;
}

console.log(lastDigit(7, 17));
console.log(lastDigit(6, 17));
console.log(lastDigit(3, 113));

console.log("=============================");

/* Warmup-1 -- endUp
Given a string, return a new string where the last 3 chars are 
now in upper case. If the string has less than 3 chars, uppercase 
whatever is there. Note that str.toUpperCase() returns the uppercase version of a string.
*/

const endUp = (str) =>{
    const last3Chars = str.slice(-3); // paima 3 paskutinius simbolius arba jei ju yra maziau, visus
    const beggining = str.slice(0, -3); // paima visa pradzia iki 3 paskutiniu simboliu, jei ju maziau nei 3, neima nei vieno
    return beggining + last3Chars.toUpperCase();    
}

console.log(endUp('Hello'));
console.log(endUp('hi there'));
console.log(endUp('hi'));

console.log("=============================");

/* Warmup-1 -- everyNth
Given a non-empty string and an int N, return the string made 
starting with char 0, and then every Nth char of the string. 
So if N is 3, use char 0, 3, 6, ... and so on. N is 1 or more.

Examples

everyNth('Miracle', 2) → Mrce
everyNth('abcdefg', 2) → aceg
everyNth('abcdefg', 3) → adg*/

const everyNth = (str, n) =>{
    let result = '';
    for(let i = 0; i < str.length; i += n){
        result += str[i];
    }   
    return result; 
}

console.log(everyNth('Miracle', 2));
console.log(everyNth('abcdefg', 2));
console.log(everyNth('abcdefg', 3));
