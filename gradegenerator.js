// importing prompt-sync
const prompt = require("prompt-sync")({sigint: true});

// Prompt user for input and convert the string to a number
let marks = prompt("Please enter your marks (0-100): ");
marks = Number(marks);

// Function to check the range of user input and assign and output grade
function getGrade(marks) {
    let grade;
    if (marks > 79 && marks <= 100) {
        grade = 'A';
    } else if (marks >= 60 && marks <= 79) {
        grade = 'B';
    } else if (marks >= 50 && marks < 60) {
        grade = 'C';
    } else if (marks >= 40 && marks < 50) {
        grade = 'D';
    } else if (marks < 40) {
        grade = 'E';
    }
    console.log("Your grade is: " + grade);
}

// Check if the user entered a valid number
if (!isNaN(marks)) {
    // Function call to execute grade assignment
    getGrade(marks);
} else {
    console.log("Invalid input. Please enter a number.");
}
