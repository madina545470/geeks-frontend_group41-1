function format(phoneNumber) {
    let phoneDigits = "";
    for (let char of phoneNumber) {
        let charNumber = Number(char);
        if (!isNaN(charNumber) && char !== " ")
            phoneDigits += char;
    }

    if (phoneDigits.startsWith("0")) {
        phoneDigits = phoneDigits.slice(1);
    }

    if (phoneDigits.length !== 12) {
        phoneDigits = "996" + phoneDigits;
    }

    return phoneDigits;
}

function getOperatorCode(phoneNumber) {
    return phoneNumber.slice(3, 6);
}

function checkNurtelecom(code) {
    let codes = ["501", "502", "701", "702"];
    return codes.includes(code);
}

function checkMega(code) {
    let codes = ["551", "552"];
    return codes.includes(code);
}

function checkBeeline(code) {
    let codes = ["771", "775", "773"];
    return codes.includes(code);
}

function detectOperator(phoneNumber) {
    let formattedPhoneNumber = format(phoneNumber);

    let operatorCode = getOperatorCode(formattedPhoneNumber);

    if (checkNurtelecom(operatorCode))
        return "O!";

    if (checkMega(operatorCode))
        return "MEGA";
    if (checkBeeline(operatorCode))
        return "Beeline";

    return "ERROR";
}


function hidePhone(phoneNumber) {
    const hiddenPhoneNum = phoneNumber.slice(0, -2) + `xx`;

    return hiddenPhoneNum;
}

console.log(hidePhone("+996 555 123 123"));





function capitalizeString(line) {
    if (line.length === 0) {
        return line;
    }
    return line.charAt(0).toLowerCase() + line.slice(1).toUpperCase();
}

console.log(capitalizeString("ЕВГЕНИЙ"));
console.log(capitalizeString("иВАНОВ"))


function capitalizeStringWord(word) {
    if (word.length === 0) {
        return word;
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}

console.log(capitalizeStringWord("Евгений"));
console.log(capitalizeStringWord("Иванов"));
