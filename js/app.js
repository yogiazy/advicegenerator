const advice_id = document.getElementById('advice_id');
const advice_slip = document.getElementById('advice_slip');

function create_quotes() {
    const http = new XMLHttpRequest();
    const quotes_id = Math.floor(Math.random() * 224) + 1;

    http.open("GET", "	https://api.adviceslip.com/advice/" + quotes_id, true);
    http.send();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            const data = JSON.parse(this.responseText);
            advice_id.innerHTML = data.slip.id;
            advice_slip.innerHTML = data.slip.advice;
        }
    }
}


// window.addEventListener('load', create_quotes());