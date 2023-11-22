//======================//START//======================//

//=======//power-( a, b ),to-calculate-the-value-of-a-raised-b//=======//
document.write("<h3>Custom function power ( a, b ), to calculate the value of a raised to b:</h3>")
console.log("Custom function power ( a, b ), to calculate the value of a raised to b:")
function custom(a,b){
let power = Math.pow(a,b)
document.write("Power (a , b) is: "+power)
console.log ("Power(a,b) is: "+power)
}

var base = 2;
var exponent = 3;
custom(base,exponent)

//============//The-year-is-a-leap-year-or-not.//============//
document.write("<h3>The year is a leap year or not:</h3>")
console.log("The year is a leap year or not:")

function isLeapYear(year){
if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)

return true;

else{
return false;
}

}
currentYear = Number(prompt('Enter Current Year:\nI will check if it is a leap year or not.'))
if(isLeapYear(currentYear)){
    document.write(currentYear," This is Leap Year...")
    console.log(currentYear,"This is Leap Year...")
}else{
    document.write(currentYear," This is Normal Year...")
    console.log(currentYear,"This is Normal Year...")
}

//===//A-triangle-are-denoted-by-a,-b,-and-c,-then-area-of-triangle//===//
document.write("<h3>A triangle are denoted by a, b, and c, then area of triangle:</h3>")
console.log("A triangle are denoted by a, b, and c, then area of triangle:")

function calculatePrimeter(a,b,c){
return (a+b+c)/2;

}

function calculateTraingleArea(a,b,c){

var s = calculatePrimeter(a,b,c)
var area = Math.sqrt(s * (s-a) * (s-b)* (s-c));
return area;

}

let sideA = 3;
let sideB = 4;
let sideC = 5;
var triangleArea = calculateTraingleArea(sideA,sideB,sideC)
document.write("Area of the Traingle is: ",triangleArea)
console.log("Area of the Traingle is: ",triangleArea)

//===//Receives-marks-received-by-a-student-in-3-subjects-average-and-percentage//===//
document.write("<h3>Receives marks received by a student in 3 subjects average and percentage:</h3>")
console.log("Receives marks received by a student in 3 subjects average and percentage:")
function averageFunction(math,english,urdu){
return (math + english + urdu) / 3;

}
function percentageFunction(math,english,urdu){
 let totalMarks = 300;
 let obtainedMarks = math + english + urdu
 return (obtainedMarks / totalMarks) * 100;
    
}
function mainFunction(){
 
    let subject1 = Number(prompt('Enter Your Math Marks:'))
    let subject2 = Number(prompt('Enter Your English Marks:'))
    let subject3 = Number(prompt('Enter Your Urdu Marks:'))

   var average = averageFunction(subject1,subject2,subject3)
   var percentage = percentageFunction(subject1,subject2,subject3)
    
   document.write("Percentage: "+ percentage+"%")
   document.write("<br/>Average Marks: "+ average)
   document.write('<br/>Marks for Math: '+ subject1)
   document.write('<br/>Marks for English: '+ subject2)
   document.write('<br/>Marks for Urdu: '+subject3)

    console.log("Percentage: "+ percentage+"%")
    console.log("Average Marks: "+ average)
    console.log('Marks for Math: '+ subject1)
    console.log('Marks for English: '+ subject2)
    console.log('Marks for Urdu: '+subject3)
}
mainFunction()

//=============//The-function-indexOf.//==============//
document.write("<h3>The function indexOf:</h3>")
console.log("The function indexOf:")

function indexOf(inputString,targetWord){

    for(i = 0; i < inputString.length; i++){
       if(inputString[i] === targetWord){
        return i
       }
    }
   
}
 let inputString = "Hello World"
 let targetWord = 'W'
 var result = indexOf(inputString,targetWord)
 document.write('IndexOf '+targetWord+" in "+inputString+' is: '+result)
 console.log('IndexOf '+targetWord+" in "+inputString+' is: '+result)

//==========//Delete-all-vowels-from-a-sentence://===========//
document.write("<h3>Delete all vowels from a sentence:</h3>")
console.log("Delete all vowels from a sentence:")
function vowels(sentence){

    let vowelsChar = 'aeiouAEIOU'
    let sentenceArray = sentence.split("")
    var resultArray = sentenceArray.filter(char => !vowelsChar.includes(char))

   let result = resultArray.join("")
    return result;
}
let sentence = `You're not very good at following someone.`
var deleteVowels = vowels(sentence)

document.write('Sentence: '+sentence)
document.write(`<br/>After Delete Vowels: `+deleteVowels)
console.log('Sentence: '+sentence)
console.log(`After Delete Vowels: `+deleteVowels)

//=========//Occurrences-of-any-two-vowels-in-a-line-text//=========//
document.write("<h3>Occurrences of any two vowels in a line text:</h3>")
console.log("Occurrences of any two vowels in a line text:")
function occurrencesVowels(word){

    word = word.toLowerCase();
    
    let count = 0;

    for(let i = 0; i < word.length - 1; i++){
      
        const currentWord = word[i];
        const nextChar = word[i + 1];

        switch (currentWord){
            case 'a':
            case 'e':  
            case 'i':
            case 'o':
            case 'u': 
            switch (nextChar){
                case 'a':
                case 'e':  
                case 'i':
                case 'o':
                case 'u': 
                     count++
                     break;
            
        }
        break;
    }   
  }
  return count;
}
let word = '“Pleases read this application and give me gratuity”'
var vowelsText = occurrencesVowels(word)
document.write("Number of occurrences of two vowels in succession: ", vowelsText);
console.log("Number of occurrences of two vowels in succession:", vowelsText);

//===============//The-distance-between-two-cities//==============//
document.write("<h3>The distance between two cities:</h3>")
console.log("The distance between two cities:")

function kilometersToMeter(kilometers){
    return  kilometers* 1000;
}

function kilometersToFeet(kilometers){
    return  kilometers* 3280.84;
}

function kilometersToInches(kilometers){
    return  kilometers* 39370.1;
}

function kilometersToCentimeter(kilometers){
    return  kilometers* 100000;
}

let distanceCities = parseFloat(prompt("Enter the distance between two cities in kilometers:"));

if(!isNaN(distanceCities)){
    document.write(`Distance in kilometer to meter : `,kilometersToMeter(distanceCities),'Meter.')
    document.write(`<br/>Distance in kilometer to meter : `,kilometersToFeet(distanceCities),'Feet.')
    document.write(`<br/>Distance in kilometer to meter : `,kilometersToInches(distanceCities),'Inches.')
    document.write(`<br/>Distance in kilometer to meter : `,kilometersToCentimeter(distanceCities),'Centermeter.')
    console.log(`Distance in kilometer to meter :`,kilometersToMeter(distanceCities),'Meter.')
    console.log(`Distance in kilometer to meter :`,kilometersToFeet(distanceCities),'Feet.')
    console.log(`Distance in kilometer to meter :`,kilometersToInches(distanceCities),'Inches.')
    console.log(`Distance in kilometer to meter :`,kilometersToCentimeter(distanceCities),'Centermeter.')
}
else{
    document.write("Invalid input. Please enter a valid number.");
    console.log("Invalid input. Please enter a valid number.");
}

//===========//Calculate-overtime-pay-of-employees.//===========//
document.write("<h3>Calculate overtime pay of employees:</h3>")
console.log("Calculate overtime pay of employees:")

function calculateOvertime(hourWorked){

const regularHour = 40;
const overTime = 12;

if(hourWorked > regularHour){

let totalWorked = hourWorked - regularHour;
let overTimetotal = overTime * totalWorked;
return overTimetotal;

}
else{
    return 0;
}

}

let userInput = parseFloat(prompt('Enter Your Working Hours in number:'))

if(!isNaN(userInput)){
    const totalOvertime = calculateOvertime(userInput)
    document.write("Overtime Pay: Rs.", totalOvertime)
    console.log("Overtime Pay: Rs.", totalOvertime)
}else{
    document.write("Invalid input. Please enter a valid number.");
    console.log("Invalid input. Please enter a valid number.");
}

//==========//A-cashier-has-currency-notes//=========//
document.write("<h3>A cashier has currency notes:</h3>")
console.log("A cashier has currency notes:")

function calculateNotes(amount) {
    
    let notes100 = 0;
    let notes50 = 0;
    let notes10 = 0;

    
    while (amount >= 100) {
        amount -= 100;
        notes100++;
    }

    while (amount >= 50) {
        amount -= 50;
        notes50++;
    }

    while (amount >= 10) {
        amount -= 10;
        notes10++;
    }

    
    console.log("100 notes: " + notes100);
    console.log("50 notes: " + notes50);
    console.log("10 notes: " + notes10);
}


let withdrawalAmount = prompt("Enter the amount to be withdrawn in hundreds: ");


withdrawalAmount = parseInt(withdrawalAmount);


if (isNaN(withdrawalAmount)) {
    console.log("Invalid input. Please enter a valid number.");
} else {
    
    calculateNotes(withdrawalAmount * 100);
}

//=========================//E-N-D//============================//