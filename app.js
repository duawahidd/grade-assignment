function checkGRADE() {

    let percentage = document.getElementById("marks").value;
    let result = document.getElementById("result");

    // Empty input
    if (percentage.trim() === "") {
        result.innerHTML = "<h2>Enter Your Percentage</h2>";
        return;
    }

    percentage = Number(percentage);

    // Invalid number
    if (percentage <= 0 || percentage >= 100) {
        result.innerHTML = `
            <h2>Please Enter a Valid Number</h2>
        `;
        return;
    }

    // Grades
    if (percentage >= 80) {
        result.innerHTML = `
            <h2>A+ Grade</h2>
            <p>A Stellar Achievement! 🌟</p>
        `;
    }
    else if (percentage >= 70) {
        result.innerHTML = `
            <h2>A Grade</h2>
            <p>Excellent! 🎉</p>
        `;
    }
    else if (percentage >= 60) {
        result.innerHTML = `
            <h2>B Grade</h2>
            <p>Good Job! 👍</p>
        `;
    }
    else if (percentage >= 50) {
        result.innerHTML = `
            <h2>C Grade</h2>
            <p>You Passed! 😊</p>
        `;
    }
    else {
        result.innerHTML = `
            <h2>Fail</h2>
            <p>Better Luck Next Time! 💪</p>
        `;
    }
}
