// PHONE BLOCK

const phoneInput = document.querySelector("#phone_input");
const phoneButton = document.querySelector("#phone_button");
const phoneSpan = document.querySelector("#phone_result");

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/


phoneButton.onclick = () => {
    if (regExp.test(phoneInput.value)) {
        phoneSpan.innerHTML = `Correct phone number`
        phoneSpan.style.color = `green`
    } else {
        phoneSpan.innerHTML = `Incorrect phone number`
        phoneSpan.style.color = `red`
    }
}


//TAB SLIDER

const tabContentBlocks = document.querySelectorAll(".tab_content_block");
const tabContentItems = document.querySelectorAll(".tab_content_item");
const tabContentItemsParent = document.querySelector(`.tab_content_items`);
let index = 0
const hideTabContent = () => {
    tabContentBlocks.forEach(item => {
        item.style.display = 'none';
    })
    tabContentItems.forEach(item => {
        item.classList.remove(`tab_content_item_active`)
    })
}

const showTabContent = (index = 0) => {
    tabContentBlocks[index].style.display = 'block';
    tabContentItems[index].classList.add('tab_content_item_active');
}


hideTabContent()
showTabContent(index)

tabContentItemsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')) {
        tabContentItems.forEach((item, tabIndex) => {
            if (event.target === item) {
                hideTabContent()
                index = tabIndex
                showTabContent(index)
            }
        })
    }
}
const autoSlider = () => {
    hideTabContent()
    index = (index + 1) % tabContentItems.length
    showTabContent(index)
}
setInterval(autoSlider, 3000)


//CONVERTER

const usdInput = document.querySelector("#usd");
const somInput = document.querySelector("#som");
const eurInput = document.querySelector("#eur");

// DRY- Do not repeat yourself
// KISS - Keep it super simple

const converter = (element, targetElement, secondElement, currency) => {
    element.oninput = () => {
        const request = new XMLHttpRequest()
        request.open('GET', '../data/converter.json');
        request.setRequestHeader('Content-type', 'application/json');
        request.send();

        request.onload = () => {
            const data = JSON.parse(request.response);
            if (currency === `som`) {
                targetElement.value = (element.value / data.usd).toFixed(2)
                secondElement.value = (element.value / data.eur).toFixed(2)
            }
            if (currency === `usd`) {
                targetElement.value = (element.value * data.usd).toFixed(2)
                secondElement.value = (element.value * 0.93).toFixed(2)
            }
            if (currency === `eur`) {
                targetElement.value = (element.value * data.eur).toFixed(2);
                secondElement.value = (element.value * 1.1).toFixed(2);
            }
            if (element.value === ``) {
                targetElement.value = ``
                secondElement.value = ``
            }
        }
    }
}
converter(somInput, usdInput, eurInput, "som");
converter(usdInput, somInput, eurInput, "usd");
converter(eurInput, somInput, usdInput, "eur");


// CARD SWITCHER

const card = document.querySelector(".card");
const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");

let cardId = 1

const getrequest = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`)
        .then(response => response.json())
        .then(data => {
            card.innerHTML = `
           <p>${data.title}</p>
           <p style="color: ${data.completed ? `green` : `red`}">${data.completed}</p>
           <span>${data.id}</span>
           `
        })
}

const slideCard = (button, current) => {
    getrequest()
    button.onclick = () => {
        switch (current) {
            case `next`:
                if (cardId === 200) {
                    cardId = 0
                }
                cardId++
                break
            case `prev`:
                if (cardId === 1) {
                    cardId = 201
                }
                cardId = cardId - 1
        }
        getrequest()
    }
}
slideCard(btnNext, `next`)
slideCard(btnPrev, `prev`)




fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.error('There is a problem', error);
    });






















