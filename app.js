const displayColorWindow = document.getElementById("window");


const leftSideColor = document.getElementById("leftSideColor");
const rightSideColor = document.getElementById("rightSideColor");

const color_code_left = document.getElementById("color_code_left");
const color_code_right = document.getElementById("color_code_right");

const outputWindow = document.getElementById("outputWindow");
const generate = document.getElementById("generate");
const direction = document.getElementById("direction");

const color_input = document.querySelectorAll(".color_input");

// display the color on input
color_input.forEach(color => {
    color.addEventListener("input", () => {
        changeColor();
        displayColor();
    })
})


// change color on input
function changeColor () {
    let leftColor = leftSideColor.value;
    let rightColor = rightSideColor.value;

    color_code_left.innerHTML = leftColor;
    color_code_right.innerHTML = rightColor;

    return {leftColor, rightColor};

}

// display color in window
function displayColor () {
    const {leftColor, rightColor} = changeColor();
    const colorCode = `linear-gradient(${leftColor}, ${rightColor})`
    displayColorWindow.style.backgroundImage = colorCode;
    console.log(colorCode);
    return colorCode;
}

// generate color css code
generate.addEventListener("click", () => {
    let cssCode = displayColor();
    outputWindow.innerHTML = `background-image: ${cssCode};`;
    let copyCode = `background-image: ${cssCode};`
    navigator.clipboard.writeText(copyCode);
})

// change gradient direction
direction.addEventListener("input", () => {
    console.log(direction.value);
})


changeColor()
displayColor()