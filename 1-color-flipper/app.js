const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const alphaNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];


const genrateBackroundColor = () => {
    const span = document.getElementById('background')
    console.log(span)
    let getRandom = Math.floor(Math.random() * colors.length)
    console.log(getRandom)
    let getColor = colors[getRandom]
    console.log(getColor);
    span.textContent = getColor
    document.body.style.background = getColor

}

