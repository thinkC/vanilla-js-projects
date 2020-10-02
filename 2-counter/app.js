const span = document.querySelector('span');
console.log(span);
//const btnOne = document.getElementById('btnOne');
const btnOne = document.querySelector('button.increase')
console.log(btnOne)
const btnTwo = document.querySelector('button.reset');
const btnThree = document.querySelector('button.decrease');
let count = 0;

btnOne.addEventListener('click', () => {
    console.log('ok')
    increaseCount()
});

btnTwo.addEventListener('click', () => {
    resetCount()
});

btnThree.addEventListener('click', () => {
    decreaseCount()
});

const increaseCount = () => {
    count++;
    getColor(count, span);
    span.textContent = count
}

const decreaseCount = () => {
    count--;
    getColor(count, span);
    span.textContent = count
}

const resetCount = () => {
    count = 0;
    getColor(count, span);
    span.textContent = count
}

function getColor(count, element) {
    if (count > 0) {
        return element.style.color = 'green';
    } else if (count < 0) {
        return element.style.color = 'red';
    } else {
        count = 0;
        return element.style.color = 'black';
    }

}