'Use strict'

// Дано тризначне число, яке надає користувач, потрібно визначити:

// Чи правда, що всі цифри однакові?
// Чи є серед цифр цифри однакові?

// валідація: перед здачею перевірити, що програма приймає і обчислює такі тризначні числа:
// '     123      '
// '  000456  '
// '   -0621   '

// і виводить помилку на такі нетризначні:
// '-10'
// '001'
// ' 2 '
// '3.2'

const threeDigitNumberInput = prompt('Enter any three-digit number');

if (!threeDigitNumberInput?.trim() || isNaN(threeDigitNumberInput) || !Number.isInteger(+threeDigitNumberInput)) {
    alert('Error: invalid number');
}
else {
    const num = Math.abs(+threeDigitNumberInput);
    console.log(num);
    if (String(num).length === 3) {
        const strNum = num.toString();
        const arrFromNum = strNum.split("");
        console.log(arrFromNum);
        if (arrFromNum[0] === arrFromNum[1] && arrFromNum[1] === arrFromNum[2]) {
            alert('All numbers are equal');
        }
        else if (arrFromNum[0] === arrFromNum[1] || arrFromNum[1] === arrFromNum[2] || arrFromNum[0] === arrFromNum[2]) {
            alert('two numbers matched');
        }
        else {
            alert('No matches');
        }
    }
    else {
        alert('Number is not 3-digit');
    }
}