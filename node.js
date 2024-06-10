let number = 0;
const button = document.querySelector("MainButton")
const numberElement = document.querySelector('.number');
const energyElement = document.querySelector('.energy');

let energy = 100;
let energyBool = false;
let enegryfirstbool = false;

function codeAdress() {
    if(enegryfirstbool == false) {
        localStorage.setItem("Energy", 100);
        localStorage.enegryfirstbool = true;
    }
    numberElement.textContent = localStorage.getItem("Money");
    energyElement.textContent = localStorage.getItem("Energy");
    number = localStorage.getItem("Money");
    energy = localStorage.getItem("Energy");
}
window.onload = codeAdress;


function ClickButton() {

    if(energy > 0) {
        if(energyBool == false) {
            number++;
            energy -= 5;
            localStorage.setItem("Energy", energy);
            energyElement.textContent = energy;
        
            localStorage.setItem("Money", number);
            numberElement.textContent = number;
        }
    }
    else {
        energyBool = true;
        setInterval(energyplus, 1000);
    }
}

button.addEventListener('click', "ClickButton");

/*energy*/

function energyplus() {
    if(energy < 100 && energyBool == true) {
        energy += 1
        energyElement.textContent = energy;
    }
    else {
        localStorage.setItem("Energy", energy);
        energyBool = false;
    }
}