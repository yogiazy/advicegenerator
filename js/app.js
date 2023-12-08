const advice_id = document.getElementById('advice_id');
const advice_slip = document.getElementById('advice_slip');

async function create_quotes() {
    const http = new XMLHttpRequest();
    const quotes_id = Math.floor(Math.random() * 224) + 1;
    const response = await fetch(`https://api.adviceslip.com/advice/${quotes_id}`);
    const data = await response.json();
    advice_id.textContent = data.slip.id;
    advice_slip.textContent = data.slip.advice;
}


// window.addEventListener('load', create_quotes());