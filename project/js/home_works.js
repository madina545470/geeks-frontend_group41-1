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
const reset = document.querySelector("#reset")

let count = 0
let interval

start.addEventListener("click", () => {
    clearInterval(interval)
    interval = setInterval(() => {
        count++
        time.innerHTML = `${count}`
    }, 1000)
})
stop.addEventListener("click", () => {
    clearInterval(interval)
})
reset.addEventListener("click", () => {
    count = 0
})


// document.addEventListener(`DOMContentLoaded`, () => {
//     const charactersBlock = document.querySelector(`.characters_block`)
//     const request = new XMLHttpRequest();
//     request.open("GET", `../data/persons.json`);
//     request.setRequestHeader(`Content-Type`, `application/json`);
//     request.send();
//
//     request.onload = () => {
//         if(request.status >=200 && request.status < 400) {
//             console.log(`Response text:`, request.responseText)
//             const persons= JSON.parse(request.responseText)
//
//             persons.forEach((character) => {
//                 const characterContainer = document.createElement(`div`);
//                 characterContainer.classList.add("character_container");
//
//                 characterContainer.innerHTML = `
//                 <div class "character_photo">
//                     <img src="${character.photo}" alt="${character.name}"></img>
//
//                 </div>
//                 <h2>${character.name}</h2>
//                 <p id="age_part" Age:${character.age}</p>
//                 <p id="bio_part" Bio:${character.bio}</p>
//
//              `;
//                 const h2Element =characterContainer.querySelector(`h2`);
//                 const pElements=characterContainer.querySelectorAll(`p`);
//
//              if (h2Element){
//                  h2Element.style.color = `white`
//              }
//              pElements.forEach(p=>{
//                  p.style.color = `white`
//              });
//              charactersBlock.append(characterContainer);
//             });
//         }else{
//             console.error(`Request failed`, request.status);
//         }
//     };
//     request.onerror=()=>{
//         console.error(`Request failed`);
//     }
// })
//
//
//




const charactersContainer = document.querySelector('.character_container');
const request = new XMLHttpRequest();
request.open('GET', '../data/persons.json');
request.setRequestHeader('Content-type', 'application/json');
request.send();

request.onload = () => {
    const data = JSON.parse(request.response);
    data.forEach(element => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
       <h2>${element.name}</h2>
       <img src="${element.photo}" alt="${element.name}" class="photo">   
       <span>${element.age}</span>
       <p>${element.bio}</p>
    `
        charactersContainer.appendChild(card)
    })
}





const request2 = new XMLHttpRequest();
request2.open('GET', '../data/info.json');
request2.setRequestHeader('Content-type', 'application/json');
request2.send();

request2.onload = () => {
    const info=JSON.parse(request2.response)
    console.log(info)
}








