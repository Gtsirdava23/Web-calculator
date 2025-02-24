function clearDisplay()
{
    document.getElementById('display').value = '';
}
function appendCharacter(character) {
    document.getElementById('display').value += character;
}
function deleteLast() {
    let display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        let expression = document.getElementById('display').value;
        let result = eval(expression);
        document.getElementById('display').value = result;
    } catch (error) {
        alert('Помилка у введенні!');
    }
}
function calculateFunction(func) {
    let display = document.getElementById('display');
    let value = parseFloat(display.value);

    if (isNaN(value)) {
        alert('Введіть число перед виконанням операції!');
        return;
    }

    let result;
    switch (func) {
        case 'sqrt':
            result = Math.sqrt(value);
            break;
        case 'log':
            result = Math.log10(value);
            break;
        case 'sin':
            result = Math.sin(value * Math.PI / 180); // Переведення в градуси
            break;
        case 'cos':
            result = Math.cos(value * Math.PI / 180);
            break;
        case 'tan':
            result = Math.tan(value * Math.PI / 180);
            break;
        default:
            alert('Невідома функція!');
            return;
    }

    display.value = result;
}