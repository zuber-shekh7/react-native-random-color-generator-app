const generateRandomColor = () => {
    const [red, green, blue] = generateRandomNumber();
    return `rgb(${red},${green},${blue})`
}

const generateRandomNumber = () => {
    return [Math.floor(Math.random()*255), Math.floor(Math.random()*255), Math.floor(Math.random()*255)]
}

export default generateRandomColor;
