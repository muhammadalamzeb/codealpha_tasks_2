const colorPicker = document.getElementById("colorPicker");
const randomButton = document.getElementById("randomButton");
const colorDisplay = document.getElementById("colorDisplay");
const copyButton = document.getElementById("copyButton");
const body = document.getElementById("body");

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

randomButton.addEventListener("click", () => {
    const randomColor = getRandomColor();
    colorPicker.value = randomColor;
    colorDisplay.style.backgroundColor = randomColor;
    body.style.backgroundColor = randomColor;
});

colorPicker.addEventListener("input", () => {
    const selectedColor = colorPicker.value;
    colorDisplay.style.backgroundColor = selectedColor;
    body.style.backgroundColor = selectedColor;
});

copyButton.addEventListener("click", () => {
    const selectedColor = colorPicker.value;
    const dummyInput = document.createElement("input");
    document.body.appendChild(dummyInput);
    dummyInput.value = selectedColor;
    dummyInput.select();
    document.execCommand("copy");
    document.body.removeChild(dummyInput);
    alert("Color copied to clipboard: " + selectedColor);
});

colorDisplay.style.backgroundColor = colorPicker.value;
body.style.backgroundColor = colorPicker.value;