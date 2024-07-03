// Function to append a number to the result display
function appendNumber(number) {
    document.getElementById('result').value += number;
}

// Function to append an operator to the result display
function appendOperator(operator) {
    document.getElementById('result').value += ' ' + operator + ' ';
}

// Function to calculate the result of the expression in the display
function calculate() {
    let resultField = document.getElementById('result');
    // Use eval to calculate the result
    resultField.value = eval(resultField.value);
}

// Function to clear the result display
function clearResult() {
    document.getElementById('result').value = '';
}
