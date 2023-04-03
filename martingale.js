const form = document.getElementById('martingale-form');
const basicBetInput = document.getElementById('basic-bet');
const winMultiplierInput = document.getElementById('win-multiplier');
const numRoundsInput = document.getElementById('num-rounds');
const calculateBtn = document.getElementById('calculate-btn');
const resultsDiv = document.getElementById('results');
const resultsList = document.getElementById('results-list');

function calculateMartingale() {
    resultsList.innerHTML = "";
    let basicBet = parseFloat(basicBetInput.value);
    let winMultiplier = parseFloat(winMultiplierInput.value);
    let numRounds = parseInt(numRoundsInput.value);
    let currentBet = basicBet;
    for (let i = 1; i <= numRounds; i++) {
        let listItem = document.createElement('li');
        listItem.innerText = `Round ${i} - ${currentBet}`;
        resultsList.appendChild(listItem);
        currentBet *= winMultiplier;
    }
    resultsDiv.style.display = "block";
}

form.addEventListener('input', function() {
    if (form.checkValidity()) {
        calculateBtn.disabled = false;
        calculateBtn.style.backgroundColor = "#007bff";
    } else {
        calculateBtn.disabled = true;
        calculateBtn.style.backgroundColor = "#ccc";
    }
});

form.addEventListener('submit', function(e) {
    e.preventDefault();
    calculateMartingale();
});