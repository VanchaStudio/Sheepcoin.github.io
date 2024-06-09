let number = 0;
const button = document.querySelector("MainButton")
const numberElement = document.querySelector('.number');

function codeAdress() {
    numberElement.textContent = localStorage.getItem("Money");
    number = localStorage.getItem("Money");
    alert('money upload')
}
window.onload = codeAdress;


function ClickButton() {
    number++;
    localStorage.setItem("Money", number);
    numberElement.textContent = number;
}
button.addEventListener('click', "ClickButton");