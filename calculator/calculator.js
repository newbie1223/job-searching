
let currentInput = ''
function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}
function appendOperator(operator) {
    currentInput += operator;
    updateDisplay();
}
function appendDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}
function calculate() {
    try {
        currentInput = (new Function('return ' + currentInput))();
        updateDisplay();
    } catch (error) {
        currentInput = 'エラー';
        updateDisplay();
    }
}
function clearDisplay() {
    currentInput = '';
    updateDisplay();
}
function updateDisplay() {
    document.getElementById('display').value = currentInput;
}