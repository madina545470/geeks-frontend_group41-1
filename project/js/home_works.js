const gmailInput = document.querySelector("#gmail_input");
const gmailButton = document.querySelector("#gmail_button");
const gmailResult = document.querySelector("#gmail_result");

const regExp = /^[a-zA-Z0-9._%+-]+@gmail\.com$/

gmailButton.onclick = () => {
    if (regExp.test(gmailButton.value)) {
        gmailResult.innerHTML = "Email is valid Gmail address.";
        gmailResult.style.color = `green`
    } else {
        gmailResult.innerHTML = "Incorrect Gmail address"
        gmailResult.style.color = `red`
    }
}


let position = 0;
const parentWidth = 449;
const childBlock = document.querySelector(".child_block");

function moveBlock() {
    if (position < parentWidth) {
        position++
        childBlock.style.left =`${position}px`;
        requestAnimationFrame(moveBlock)
    }
}

moveBlock()










