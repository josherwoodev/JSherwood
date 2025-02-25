/*  1. Dynamic Age Calculator
    Use a traditional function to calculate the user’s age.
        Prompt the user to enter their birth year using prompt() and store it in a variable.
        Based on their input, determine how many years old they are.
        Log the calculated age to the console: “Your age is:”*/
function calcAge() {
    let year = prompt("What is your birth year?");
    let diff = new Date().getFullYear() - new Date(year, 0).getFullYear();
    console.log("Your age is: ", diff);
}
calcAge();
/*  2. Simple Interest Calculator
    Use a traditional function named calculateSimpleInterest to calculate the simple interest using the formula:
        Simple Interest = (Principal × Rate × Time)/100
    Prompt the user for the principal amount, rate of interest, and time in years using prompt().
        Store each of these in a separate variable
    Log the result to the console: “Your simple interest is:”*/
function calculateSimpleInterest() {
    let principal = prompt("What is the principal?");
    let rate = prompt("What is the interest rate?");
    let years = prompt("How many years?");
    console.log(principal * rate * years / 100);
}
calculateSimpleInterest();
/*  3. Favorite Color Selector
    Create an array with three colors.
        Use a traditional function named addColor to add a new color to an array.
        Takes one argument - the array of colors
    Prompt the user to input a color name to add to the array.
        Prepend the users color to the existing array
    Log the updated array to the console using: “Updated colors: “*/
let colors = ["red", "green", "blue"];
function addColor(colors) {
    colors.unshift(prompt("What color would you like to add?"));
    console.log("Updated colors: " + colors.join(', '));
}
addColor(colors);
/*  4. Event Countdown with Date Object
    Use a traditional function named calculateDaysUntil to calculate the number of days remaining until a future event.
        Takes one argument - users event date
    Prompt the user to input the event date in the format YYYY-MM-DD.
        If not in this format - make the user enter in correct format
    Use the Date object to calculate the difference in days between today and the event.
        Log the result to the console using: “Days until the event: “.*/
function getEventDate() {
    let toPrompt = "What is the event date? Ensure you use the correct format. (YYYY-MM-DD)";
    let res = null;
    for (let isValid = false; !isValid; isValid = new RegExp(/\b\d{4}(-\d{2}){2}\b/).test(res)) {
        res = prompt(toPrompt);
    }
    return res;
}
function calculateDaysUntil(eventDate) {
    return new Date(new Date(eventDate) - new Date()).getDate();
}
console.log("Days until your event: " + calculateDaysUntil(getEventDate()));
/*  5. Temperature Classifier
    Use a traditional function named classifyTemperature to classify a temperature.
        Takes one argument - user input for temperature
        Prompt the user to input the temperature in Celsius.
        Convert into Farenheit using this formula
    Fahrenheit = (C x (9/5)) + 32
    Use conditionals to classify the temperature as:
        "Hot," if over 100
        "Warm," if over 80
        "Cold” if under 40
        “Chilly” for everything else
    Error message if number not entered
    Log the classification to the console using: “The temperature is: “*/
function classifyTemperature() {
    let degreesCelsius;
    for (degreesCelsius = NaN; isNaN(degreesCelsius);
         degreesCelsius = parseInt(prompt("Please enter the temperature in Celsius"))) ;
    let degreesFaren = degreesCelsius * (9/5) + 32;
    let tempFeels;
    if (degreesFaren >= 100) tempFeels = "Hot";
    else if (degreesFaren >= 80) tempFeels = "Warm";
    else if (degreesFaren >= 40) tempFeels = "Cold";
    else tempFeels = "Chilly";
    console.log(tempFeels);
}
classifyTemperature();
/*  6. Student Array Operations
    Hardcode an array of students, each with a name and age based on this info: Alice is 20, Bob is 22, and Charlie is 18
    Use a fat arrow function to modify a student's age in an array of student objects.
    Prompt the user to input the name of the student to modify
    If student does not exist, log an error message
    Prompt the user to input a new age.
    If not a number, log an error message
    Update the student’s age in the array of objects.
        Log the updated array to the console: “Updated students: ”*/
class Student {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
let students = [new Student("Alice", 20), new Student("Bob", 22), new Student("Charlie", 18)];
modifyStudents = () => {
    let name = prompt("Which student would you like to update?");
    let index = students.findIndex((val) => val.name.equals(name));
    if (index > -1) {
        let age = parseInt(prompt("What is the corrected age?"));
        if (isNaN(age)) console.log("ERROR:\tInvalid input entered for age.");
        else students[index].age = age;
    } else {
        console.log("ERROR:\tNo student by that name exists.")
    }
    console.log(students)
}
modifyStudents();
/*  7. Grade Classification
    Use a fat arrow function named classifyGrade to classify grades.
        Prompt the user to input a grade as a number.
        Use conditionals to classify the grade as "A," "B," "C," "D," or "F."
    ONLY use ternaries!!!!
        Log the result to the console using: “The grade classification is: “
/*  8. Shopping List Operations
    Hardcode an array representing a shopping list of eggs, butter, flour, and eggs.
        Use a fat arrow function named modifyItem to modify items in an array.
        Takes two arguments - the shopping list array and the prompted new item form user.
        Log the updated array to the console using: “Updated shopping list: “.
/*  9. Weekday Detector
    Use a fat arrow function to determine the day of the week.
        Use the Date object to get the current day.
        Log the day of the week to the console using: “Today is: “
/*  10. How Long Until Graduation
    Use a fat arrow function to determine the day of the week.
        Use the Date object to get the current day.
        Log the day of the week to the console using: “Today is: “
    Display in this format: “2025, January 21st”
    NOTE: use -st, -nd, -rd, -th based on the numerical date
    22nd, 5th, 9th, 23rd, etc….
    Log how many days left between the current date and last day of course work to the console using: “And you have <days> left in this web design program until graduation. “
    Last day is 5/17/25
    Rough idea. Does not need to be 100% accurate but should be within a few days of actual answer.*/
