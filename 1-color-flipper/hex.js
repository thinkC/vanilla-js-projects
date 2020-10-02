const alphaNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


const btn = document.querySelector('.btn')
//console.log(btn);
btn.addEventListener('click', () => {
    const span = document.getElementById('background');
    span.textContent = generateHexColors();
    document.body.style.background = generateHexColors();
})

//generate hexa decimal colors
const generateHexColors = () => {
    const shuffledAlphaNum = shuffleArr(alphaNum)
    const sixItems = getSixAlphaNum(shuffledAlphaNum)
    const hexColor = '#' + sixItems.join('');
    //console.log(hexColor);
    return hexColor
}

//shuffles arrays
shuffleArr = (arr) => {
    return arr.sort(function () { return 0.5 - Math.random() });
}

//push 6 items in the array
let getSixAlphaNum = (arr) => {
    let newArr = []
    for (let i = 0; i <= 5; i++) {
        newArr.push(arr[i])
    }
    console.log(newArr)
    return newArr;
}

