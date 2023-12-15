
const ecran = document.getElementById('ecran');
const back = document.querySelector('.touche-sec');
const reset = document.getElementById('reset');
const numbers = document.querySelectorAll('.touche-number input');
const btnAddition = document.getElementById('btnAddition');
const btnSoustraction = document.getElementById('btnSoustraction');
const btnMultiplication = document.getElementById('btnMultiplication');
const btnDivision = document.getElementById('btnDivision');
const btnEqual = document.getElementById('btnEqual');


let resultat = {
    resultat: [0]
};
let operation = "";
ecran.innerText = "";
// On créé une fonction pour enregistrer le nombre sur l'écran
function addNumber () {
    for (let number of numbers) {
        number.addEventListener('click', () => {
            resultat.resultat += number.value;
            ecran.innerText += number.value;
            if (parseInt(resultat) === 0) {
                resultat = 
                ecran.innerText = "";
            };

            console.log(ecran)
        });
    };
};

addNumber();

// On réinitialise les infos

const delet = () => {
    resultat = {
        resultat: [0]
    }
    ecran.innerText = "";
    operation = "";
    newResultat = [];
    finalNumber = 0;
};


reset.addEventListener('click', delet);


// On créé un tableau pour enregistrer le nombre précédemment sélectionné
let newResultat = [];
// On créé une fonction pour activer l'addition
const addition = () => {
    addNumber;
    newResultat.push(parseInt(resultat.resultat));
    operation = "addition";
    resultat = {
        resultat: [0]
    };
    ecran.innerText = "";
};

btnAddition.addEventListener('click', addition);

// On créé une fonction pour activer la soustraction
const soustraction = () => {
    addNumber;
    newResultat.push(parseInt(resultat.resultat));
    operation = "soustraction";
    resultat = {
        resultat: [0]
    };
    ecran.innerText = "";
    console.log(newResultat);
};

btnSoustraction.addEventListener('click', soustraction);

// On créé une fonction pour activer la multiplication
const multiplication = () => {
    addNumber;
    newResultat.push(parseInt(resultat.resultat));
    operation = "multiplication";
    resultat = {
        resultat: [0]
    };
    ecran.innerText = "";
};

btnMultiplication.addEventListener('click', multiplication);

// On créé une fonction pour activer la division
const division = () => {
    addNumber;
    newResultat.push(parseInt(resultat.resultat));
    operation = "division";
    resultat = {
        resultat: [0]
    };
    ecran.innerText = "";
    console.log(newResultat);
}

btnDivision.addEventListener('click', division)

let finalNumber = 0

// On créé une fonction pour réaliser notre addition
const equalAddition = () => {
    if (finalNumber === 0) {
        addition()
        finalNumber = newResultat.reduce((accumulator, currentValue) => accumulator + currentValue) + parseInt(resultat.resultat)
        ecran.innerText = finalNumber
        console.log('Je fais une addition')  
    } else if (finalNumber > 0) {
        console.log(finalNumber)
        finalNumber = finalNumber + parseInt(resultat.resultat)
        ecran.innerText = finalNumber
    }
    console.log(resultat.resultat)
    console.log(finalNumber)
}

// On créé une fonction pour réaliser notre soustraction
const equalSoustraction = () => {
    if (finalNumber === 0) {
        soustraction()
        finalNumber = newResultat[0]
        for (let i = 1; i < newResultat.length; i++) {
            finalNumber = finalNumber -= newResultat[i]
        }
        ecran.innerText = finalNumber
    } else if (finalNumber > 0) {
        finalNumber = finalNumber - parseInt(resultat.resultat)
        ecran.innerText = finalNumber
    }
    console.log(resultat)
    console.log(finalNumber)    
}

// On créé une fonction pour réaliser notre multiplication
const equalMultiplication = () => {
    if (finalNumber === 0) {
        multiplication
        for (let newResult of newResultat) {
            console.log(newResult)
            finalNumber = newResultat.reduce((accumulator, currentValue) => accumulator * parseInt(currentValue), 1) * parseInt(resultat.resultat);
            ecran.innerText = finalNumber
            console.log(resultat)
        };
        console.log(finalNumber)
    } else if (finalNumber > 0) {
        console.log(finalNumber)
        finalNumber = finalNumber * parseInt(resultat.resultat);
        ecran.innerText = finalNumber;
    };
}

// On créé une fonction pour réaliser notre division
const equalDivision = () => {
    if (finalNumber === 0) {
        division
        for (let newResult of newResultat) {
            console.log(newResult)
            console.log(resultat)
            finalNumber = parseInt(newResult) / parseInt(resultat.resultat);
            ecran.innerText = finalNumber
        };
        console.log(finalNumber)
    } else if (finalNumber > 0) {
        finalNumber = finalNumber / parseInt(resultat.resultat);
        ecran.innerText = finalNumber;
    };
}

// On appelle nos fonctions selon l'opération effectuée.
btnEqual.addEventListener('click', () => {
    if (operation === "addition") {
        equalAddition();
    } else if (operation === "soustraction") {
        equalSoustraction();
    } else if (operation === 'multiplication') {
        equalMultiplication();
    } else if (operation === 'division') {
        equalDivision();
    }
})

