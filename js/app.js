document.getElementById('pin-generate').addEventListener('click', function () {
    const pin = pinGenerate();
    const pinField = document.getElementById('pin-generate-field');
    pinField.value = pin + '';
})

document.getElementById('number-field').addEventListener('click', function (e) {
    const num = e.target.innerText;
    console.log(num);
    const numberTypedField = document.getElementById('number-typed');
    const previousNumber = numberTypedField.value;
    if (isNaN(num)) {
        if (num === 'C') {
            numberTypedField.value = '';
        }
        else if (num === '<') {
            const digits = previousNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            numberTypedField.value = remainingDigits;
        }
    } else {
        const newNumberTypedField = previousNumber + num;
        numberTypedField.value = newNumberTypedField;
    }
})

let count = 3;

document.getElementById('btn-submit').addEventListener('click', function () {
    const displayPin = document.getElementById('pin-generate-field');
    const dPin = displayPin.value;

    const typedPin = document.getElementById('number-typed');
    const tPin = typedPin.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');
    if (dPin === '' && tPin === '') {
        pinSuccessMessage.style.display = 'none';
        pinFailureMessage.style.display = 'none';
        alert('Please generate & enter pin');
        return;
    } else if (dPin === '') {
        pinSuccessMessage.style.display = 'none';
        pinFailureMessage.style.display = 'none';
        typedPin.value = '';
        alert('Please generate pin');
        return;
    } else if (tPin === '') {
        pinSuccessMessage.style.display = 'none';
        pinFailureMessage.style.display = 'none';
        displayPin.value = '';
        alert('Please enter pin');
        return;
    } else if (dPin === tPin) {
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    } else {
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }

    count -= 1;

    const tryCountNumber = document.getElementById('try-count');
    const tryCountValueString = tryCountNumber.innerText;
    let tryCountValue = parseInt(tryCountValueString);
    tryCountValue = count;
    if (count >= 0) {
        tryCountNumber.innerText = tryCountValue;
    } else {
        pinSuccessMessage.style.display = 'none';
        pinFailureMessage.style.display = 'none';
        displayPin.value = '';
        typedPin.value = '';
        tryCountNumber.innerText = 3;
        alert('Please try again.');
        return;
    }
})