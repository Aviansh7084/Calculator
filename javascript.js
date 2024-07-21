let display = document.getElementById('display');
let currentValue = '0';

function appendValue(value) {
    if (currentValue === '0') {
        currentValue = value;
    } else {
        currentValue += value;
    }
    updateDisplay();
}

function clearDisplay() {
    currentValue = '0';
    updateDisplay();
}

function calculateResult() {
    try {
        currentValue = eval(currentValue);
        updateDisplay();
    } catch (error) {
        currentValue = 'Error';
        updateDisplay();
        setTimeout(() => {
            clearDisplay();
        }, 2000);
    }
}

function updateDisplay() {
    display.innerText = currentValue;
}
