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
// DRY- Do not repeat yourself
// // KISS - Keep it super simple

const usdInput = document.querySelector("#usd");
const somInput = document.querySelector("#som");
const eurInput = document.querySelector("#eur");

const converter = (element, targetElement, secondElement, currency) => {
    element.oninput = async () => {
        try {
            const response = await fetch("../data/converter.json", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
            });
            if (!response.ok) {
                throw new Error(`Error`);
            }
            const data = await response.json();
            switch (currency) {
                case 'som':
                    targetElement.value = (element.value / data.usd).toFixed(2);
                    secondElement.value = (element.value / data.eur).toFixed(2);
                    break;
                case 'usd':
                    targetElement.value = (element.value * data.usd).toFixed(2);
                    secondElement.value = (element.value * 0.93).toFixed(2);
                    break;
                case 'eur':
                    targetElement.value = (element.value * data.eur).toFixed(2);
                    secondElement.value = (element.value * 1.1).toFixed(2);
                    break;
                default:
                    throw new Error("Error");
            }
        } catch (error) {
            console.error('Error', error);
            targetElement.value = ``;
            secondElement.value = ``;
        }
    };
};
converter(somInput, usdInput, eurInput, "som");
converter(usdInput, somInput, eurInput, "usd");
converter(eurInput, somInput, usdInput, "eur");



// CARD SWITCHER

const card = document.querySelector(".card");
const btnPrev = document.querySelector("#btn-prev");
const btnNext = document.querySelector("#btn-next");

let cardId = 1

const getrequest = async () => {
    try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${cardId}`)
        if (!response.ok) {
            throw new Error(`Error`);
        }
        const data = await response.json();
        card.innerHTML = `
           <p>${data.title}</p>
           <p style="color: ${data.completed ? `green` : `red`}">${data.completed}</p>
           <span>${data.id}</span>
           `
    }
    catch(error){
        console.error('Error', error);
        card.innerHTML = `error`
    }
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


// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Network response was not ok ' + response.statusText);
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.error('There is a problem', error);
//     });


// WEATHER

const searchInput = document.querySelector(".cityName");
// const searchButton = document.querySelector(`#search`);
const temp = document.querySelector(`.temp`);
const city = document.querySelector(`.city`);

const API_KEY = `e417df62e04d3b1b111abeab19cea714`
const API = `http://api.openweathermap.org/data/2.5/weather`


searchInput.oninput = async () => {
    try {
        const response = await fetch(`${API}?q=${searchInput.value}&appid=${API_KEY}`)
        const data = await response.json();
        city.innerHTML = data.name || `Город не найден...`
        temp.innerHTML = data.main?.temp ? Math.round(data.main?.temp - 273) + `&deg;C` : `*/*/*`
    } catch (e) {
        console.log(e)
    }

}















//query params-  параматры запроса
// C F Фарингейтеры
// 36С => 36+273 = 311F

//декомбизация- сокращение кода
//Спец символы HTML

//optional chaining- опциональная цепочка =оператор ?.

















