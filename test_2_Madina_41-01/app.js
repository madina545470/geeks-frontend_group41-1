//TASK_1

// const extractNumbers = (`a1fg5hj6`)
//     const regExp= /\d+/g
//     console.log(extractNumbers.match(regExp))

//TASK_2

// const fibonacciNum = () => {
//     let i = 1;
//     const interval = setInterval(() => {
//         console.log(i);
//         i++;
//         if (i > 144) {
//             clearInterval(interval);
//         }
//     }, 1000);
// }
// fibonacciNum();

//TASK_3
//
// const fetchProdTitles = async () => {
//     try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         if (!response.ok) {
//             throw new Error('Error');
//         }
//         const data = await response.json();
//         data.forEach(product => {
//             console.log(product.title);
//         });
//     } catch (error) {
//         console.error('Error:', error);
//     }
// };
//
// fetchProdTitles();

//TASK_4

// document.addEventListener('click', function(event) {
//     if (event.target.classList.contains('color-btn')) {
//         const color = event.target.getAttribute('data-color');
//         document.body.style.backgroundColor = color;
//     }
// });

//TASK_5

// const button = document.getElementById('.tog-button');
// const block = document.getElementById('.tog-block');
//
// button.addEventListener('click', () => {
//     if (block.style.display === 'none' || block.style.display === '') {
//         block.style.display = 'block';
//     } else {
//         block.style.display = 'none';
//     }
// });

//TASK_6
let count = 0;
const counterElement = document.getElementById('counter');

const interval = setInterval(() => {
    if (count < 100) {
        count++;
        counterElement.textContent = count;
    } else {
        clearInterval(interval);
    }
}, 1);

