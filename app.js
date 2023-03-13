const displayColorWindow = document.getElementById("window");


const leftSideColor = document.getElementById("leftSideColor");
const rightSideColor = document.getElementById("rightSideColor");

const color_code_left = document.getElementById("color_code_left");
const color_code_right = document.getElementById("color_code_right");

const outputWindow = document.getElementById("outputWindow");
const generate = document.getElementById("generate");
const direction = document.getElementById("direction");
const degree = document.getElementById("degree");

const color_input = document.querySelectorAll(".color_input");
let setdirection = "top";
let setDegree = "";

// display the color on input
color_input.forEach(color => {
    color.addEventListener("input", () => {
        changeColor();
        displayColorByDirection(setdirection);
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
function displayColorByDirection (direction) {
    const {leftColor, rightColor} = changeColor();
    const colorCode = `linear-gradient(to ${direction}, ${leftColor}, ${rightColor})`
    displayColorWindow.style.backgroundImage = colorCode;
    console.log(colorCode);
    return colorCode;
}

function displayColorByDegree (deg) {
    const {leftColor, rightColor} = changeColor();
    const colorCode = `linear-gradient(${deg}deg, ${leftColor}, ${rightColor})`
    displayColorWindow.style.backgroundImage = colorCode;
    console.log(colorCode);
    return colorCode;
}

// change gradient by direction
direction.addEventListener("input", () => {
    setdirection = direction.value;
    console.log(setdirection);
    switch (setdirection) {
        case "left":
            displayColorByDirection("left");
            break;
        
        case "right":
            displayColorByDirection("right");
            break;

        case "top":
            displayColorByDirection("top");
            break;

        case "bottom":
            displayColorByDirection("bottom");
            break;
        default:
            break;
    }
})

// generate color css code
generate.addEventListener("click", () => {
    let cssCode = displayColorByDirection(setdirection);
    outputWindow.innerHTML = `background-image: ${cssCode};`;
    let copyCode = `background-image: ${cssCode};`
    navigator.clipboard.writeText(copyCode);
})


if(document.getElementById("degreeSwitch").checked == true){
    degree.addEventListener("input", () => {
        let getDegree = degree.value;
        displayColorByDegree(getDegree);
        console.log(getDegree);
    })
}

    // degree.addEventListener("input", () => {
    //     let getDegree = degree.value;
    //     displayColorByDegree(getDegree);
    //     console.log(getDegree);
    // })

    // console.log(degree);



changeColor();
displayColorByDirection(setdirection);