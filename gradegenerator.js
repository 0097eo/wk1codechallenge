//prompt user for input and convert the string to a number
let marks = prompt("Please enter your marks (0-100)")
marks = Number(marks)


// function to check the range of user input and assign and output grade

function getGrade(){
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
    alert("Your grade is: " + grade);
    
}
// check if the user entered a valid number
if (!isNaN(marks)) {
    // function call to execute grade assignment
    getGrade(marks);
} else {
    alert("Invalid input. Please enter a number.");
}