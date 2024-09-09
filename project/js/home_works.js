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




const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");

let positionX = 0, positionY = 0

const offsetWidth = parentBlock.offsetWidth - childBlock.offsetWidth;
const offsetHeight = parentBlock.offsetHeight - childBlock.offsetHeight;

const moveBlock = () => {
    if (positionX < offsetWidth && positionY === 0) {
        positionX++
        childBlock.style.left = `${positionX}px`
        // requestAnimationFrame(moveBlock)
    } else if (positionX >= offsetWidth && positionY < offsetHeight) {
        positionY++
        childBlock.style.top = `${positionY}px`
        // requestAnimationFrame(moveBlock)
    } else if (positionX > 0 && positionY === offsetHeight) {
        positionX--
        childBlock.style.left = `${positionX}px`
    } else if (positionX === 0 && positionY > 0) {
        positionY--
        childBlock.style.top = `${positionY}px`
    }
    setTimeout(moveBlock, 1)
}

moveBlock()






const time = document.querySelector("#seconds")
const start = document.querySelector("#start")
const stop = document.querySelector("#stop")

let count = 0
let interval

start.addEventListener("click", ()  => {
    clearInterval(interval)
    interval= setInterval(() => {
        count++
        time.innerHTML = `${count}`
    }, 1000)
})
stop.addEventListener("click", () => {
    clearInterval(interval)
})












