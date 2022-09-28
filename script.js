const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');
const popup = document.querySelector(".popup");

let alphabets = "abcdefghijklmnopqrstuvwxyz";
let numbers = "1234567990";
let symbols = "!@#$%^&*()_-+={[}]|:;\"'<,>.?";


const randomFunc = {
    lower: getRandomLower,
    upper: getRandomUpper,
    number: getRandomNumber,
    symbol: getRandomSymbol
}

clipboardEl.addEventListener('click', () => {
    navigator.clipboard.writeText(resultEl.innerText);
    if (resultEl.innerText.length > 0) {
        popup.hidden = false;
        setTimeout(() => {
            popup.hidden = true;
        }, 2000);
    }
})
function closeAlert() {
    popup.style.display='none';
}


generateEl.addEventListener('click', () => {
    generatePassword(randomFunc.lower ,randomFunc.upper ,randomFunc.number ,randomFunc.symbol , lengthEl.value);
})

function generatePassword(lower, upper, number, symbol, length) {
    
    const generatedPassword = [];
    if (length >= 5 && length <=20) {
            for (let i = 0; i < length; i++) {
                generatedPassword.push(lower(), upper(), number(), symbol()); 
            }
            const password = generatedPassword.join('').slice(0, length);
            resultEl.textContent = password;
    }
    else if (length < 5) {
        resultEl.textContent = "Please Enter >=5 ";
    } else {
        resultEl.textContent = "Please Enter <=20";
    } 
}

function getRandomLower() {
    
   if(lowercaseEl.checked){
    const randomAlphabetLowerChar = alphabets[Math.floor(Math.random()*alphabets.length)].toLowerCase();
    return randomAlphabetLowerChar;
   }

}

function getRandomUpper() {
     if(uppercaseEl.checked){
        const randomAlphabetUpperChar = alphabets[Math.floor(Math.random()*alphabets.length)].toUpperCase();
     return randomAlphabetUpperChar;
     }
}

function getRandomNumber() {
            if(numbersEl.checked){
                const randomNumber = numbers[Math.floor(Math.random()*numbers.length)];
                return randomNumber;
            }
}

function getRandomSymbol() {

    if(symbolsEl.checked){
        const randomSymbol =symbols[Math.floor(Math.random()*symbols.length)];
        return randomSymbol;
    }
}