const container = document.getElementById('container');

const button = document.getElementById('my_button');

function generateNewSquare() {
    const square = document.createElement('div');
    square.classList.add('square');
    return square;
}

button.addEventListener('click', function () {
    for (let i = 0; i < 100; i++) {
        const newSquare = generateNewSquare();

        newSquare.innerHTML = i;

        container.append(newSquare);
    }
});