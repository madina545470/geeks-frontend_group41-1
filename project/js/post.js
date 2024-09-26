function createCards(posts) {
    const wrapper = document.querySelector(`.wrapper`)
    wrapper.innerHTML = ``
    posts.slice(0, 20).forEach(post => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
            <img src="https://cdn.pixabay.com/photo/2021/07/20/14/59/iron-man-6480952_1280.jpg" alt="img">
            <h3>${post.title}</h3>
            <p>${post.body}</p>
        `
        wrapper.appendChild(card)
    })
}
const request = async () => {
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        createCards(data)
    }
    catch(error) {
        console.error(error)
    }
}
    request()