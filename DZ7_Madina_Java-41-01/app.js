function createElement(number) {
    const element = document.createElement("div");
    element.classList.add("number");
    element.innerHTML = number;
    return element;
}

function generate() {
    return Math.round (Math.random() * 10)
}

function generateOTP () {
    const otpContainer = document.getElementById("otp-container");
    otpContainer.innerHTML = "";
    const otpLength = 4;
    for (let i = 0; i < otpLength; i++) {
        const randomNumber = generate();
        const otpElement = createElement(randomNumber);
        otpContainer.appendChild(otpElement);
    }
}
document.getElementById("generate-btn").addEventListener("click", generateOTP);
