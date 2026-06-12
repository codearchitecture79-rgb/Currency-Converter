let from = document.querySelector('#from');
let to = document.querySelector('#to');
let fromImg = document.querySelector('.from');
let toImg = document.querySelector('.to');
const button = document.querySelector('button');
const input = document.querySelector('input');
const display = document.querySelector('.display');

input.addEventListener('input', (e) => {
    let val = e.target.value;
    if (val <= 0) {
        val = 1;
    }
    input.value = val;
})

for (const curr in countryList) {
    let fromOption = document.createElement('option');
    let toOption = document.createElement('option');
    fromOption.value = curr;
    toOption.value = curr;
    fromOption.innerText = curr;
    toOption.innerText = curr;
    from.append(fromOption);
    to.append(toOption);
}

from.addEventListener('click', () => {
    changeFlag();
})
to.addEventListener('click', () => {
    changeFlag();
})

function changeFlag() {
    try {
        const fromFlag = countryList[from.value];
        const toFlag = countryList[to.value];
        fromImg.src = `https://flagsapi.com/${fromFlag}/flat/64.png`;
        toImg.src = `https://flagsapi.com/${toFlag}/flat/64.png`;
    } catch (error) {
        console.log(error);
    }
}
changeFlag();

async function exchange() {
    try {
        const date = new Date();
        const url = `https:///cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date.getFullYear()}-${date.getMonth()}-${date.getDate()}/v1/currencies/${from.value.toLowerCase()}.json`;
        const res = await fetch(url);
        const data = await res.json();
        const rate = data[from.value.toLowerCase()][to.value.toLowerCase()];
        const value = input.value * rate;
        display.innerHTML = value;
    } catch (error) {
        console.log(error);
    }
}

button.addEventListener('click', () => {
    exchange();
});
