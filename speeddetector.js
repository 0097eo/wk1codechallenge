function calculateDemeritPoints(speed) {
    let demeritPoints = 0;
    let message = "";

    // Check if speed is less than 70
    if (speed < 70) {
        message = "Ok";
    } else {
        // Calculate demerit points for every 5 above 70
        demeritPoints = Math.floor((speed - 70) / 5);
        message = "Points: " + demeritPoints;

        // Check if demerit points exceeded 12
    if (demeritPoints > 12) {
            message = "License suspended";
        }
    }

    // return the message
    return message;
}

// example function call
console.log(calculateDemeritPoints(180)); 
