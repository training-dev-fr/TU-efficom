const sum = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        return new Error("veuillez saisir des nombres");
    }
    return a + b;
}

const divide = (dividend, divisor) => {
    if (divisor > 0) {
        return dividend / divisor
    } else {
        return false
    }
}

function checkNumber(number) {
    if(isNaN(number)){
        throw new Error("pas un nombre");
    }
    let result = { integer: false, positiv: false, even: null };
    if (parseInt(number) === number) {
        result.integer = true;
    }
    if (number >= 0) {
        result.positiv = true;
    }
    if (result.integer) {
        if (number % 2 === 0) {
            result.even = true;
        } else {
            result.even = false;
        }
    }
    return result;
}


module.exports = { sum, divide, checkNumber };
