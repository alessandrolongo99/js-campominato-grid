const container = document.getElementById('container');

const button = document.getElementById('my_button');

function generateNewSquare() {
    const square = document.createElement('div');
    square.classList.add('square', 'flex_container');
    return square;
}

button.addEventListener('click', function () {
    document.getElementById('container').style.display = 'flex';
    for (let i = 0; i < 100; i++) {
        const newSquare = generateNewSquare();

        newSquare.addEventListener('click', function () {
            newSquare.classList.toggle('activated');

            console.log(newSquare.innerHTML);
        });

        newSquare.innerHTML = i + 1;

        container.append(newSquare);
    }
});

