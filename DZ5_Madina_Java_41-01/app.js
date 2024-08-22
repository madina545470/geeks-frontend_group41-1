function changeLight(color) {
    document.querySelectorAll('.light').forEach(light => light.classList.remove('active'));

    document.getElementById(color).classList.add('active');

    const messages = {
        red: 'STOP',
        yellow: 'WAIT',
        green: 'GO'
    };

    document.getElementById('message').textContent = messages[color];
}