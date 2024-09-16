//TASK 1

const containsOnlyDigits = (str) => {
    const regExp = /^\d+$/;
    return regExp.test (str)
}

console.log(containsOnlyDigits("12345"));
console.log(containsOnlyDigits("12a45"));


//TASK 2
counter = () => {
    console.log('Прошла секунда')
}
setInterval(counter, 1000);


//TASK 3
const count = () => {
    let i = 1;
    const interval = setInterval(() => {
        console.log(i);
        i++;
        if (i > 10) {
            clearInterval(interval);
        }
    }, 1000);
}
count();


//TASK 4
document.addEventListener('DOMContentLoaded', () => {
    const block = document.getElementById('color-block');

    block.addEventListener('click', () => {
        block.classList.toggle('active');
    });
});


//TASK 5
const request=new XMLHttpRequest();
request.open("GET", `../test_1_Madina_41-01/test_1.json`)
request.setRequestHeader('Content-type', 'application/json');
request.send();

request.onload = () => {
    const info=JSON.parse(request.response)
    console.log(info)
}




