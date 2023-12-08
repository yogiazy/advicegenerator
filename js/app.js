const $ = (x) => document.querySelector(x);

async function create_quotes() {
    $('#icon_dice').classList.add('rotating');
    const id = Math.floor(Math.random() * 224) + 1;
    const res = await fetch(`https://api.adviceslip.com/advice/${id}`);
    const d = await res.json();

    setTimeout(() => {
        $('#advice_id').textContent = d.slip.id;
        $('#advice_slip').textContent = d.slip.advice;
        $('#icon_dice').classList.remove('rotating');
    }, 400);
}