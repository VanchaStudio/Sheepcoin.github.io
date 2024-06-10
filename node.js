let number = 0;
const button = document.querySelector("MainButton")
const numberElement = document.querySelector('.number');
const energyElement = document.querySelector('.energy');

let energy = 100;
let energyBool = false;
let enegryfirstbool = false;
const timerid = null;

function codeAdress() {
    enegryfirstbool = localStorage.getItem("EnergyFirst");
    if(enegryfirstbool == false) {
        alert("test");
        localStorage.setItem("Energy", 100);
        enegryfirstbool = true;
        localStorage.setItem("EnergyFirst", enegryfirstbool);
    }

    numberElement.textContent = localStorage.getItem("Money");
    energyElement.textContent = localStorage.getItem("Energy");
    number = localStorage.getItem("Money");
    energy = localStorage.getItem("Energy");

    if(energy <= 0) {
        energyBool = true;
        energyplus();
    } 
}
window.onload = codeAdress;


function ClickButton() {

    if(energy > 0) {
        if(energyBool == false) {
            number++;
            energy -= 1;
            localStorage.setItem("Energy", energy);
            energyElement.textContent = energy;
        
            localStorage.setItem("Money", number);
            numberElement.textContent = number;
        }
    }
    else {
        energyBool = true;
        timerid = setInterval(energyplus, 1000);
    }
}

button.addEventListener('click', "ClickButton");

/*energy*/

function energyplus() {
    if(energy < 100 && energyBool == true) {
        energy += 1
        localStorage.setItem("Energy", energy);
        energyElement.textContent = energy;
    }
    else {
        clearInterval(timerid);
        localStorage.setItem("Energy", energy);
        energyBool = false;
    }
}