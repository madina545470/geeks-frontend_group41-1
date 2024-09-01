document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const users = [
        { email: "john@doe.com", password: "123test" },
        { email: "mentor@geeks.kg", password: "geeks_2020" },
        { email: "support@geeks.kg", password: "qwerty" }
    ];

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const ValidUser = users.some(user => user.email === email && user.password === password);

    if (ValidUser) {
        document.body.classList.remove('error');
        document.body.classList.add('success');
    } else {
        document.body.classList.remove('success');
        document.body.classList.add('error');
    }
});
