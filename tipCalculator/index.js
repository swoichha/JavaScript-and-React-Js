const cost_input = document.querySelector('.cost');
const tip_value = document.querySelector('.tipValue');

const tip_btn = document.querySelector('#tip-btn');
console.log(tip_btn, cost_input, tip_value)
tip_btn.addEventListener('click', calc_tip);

function calc_tip () {
    let cost = Number(cost_input.value);
    let tip = Number(tip_value.value) / 100;
    let total_tip = (cost * tip);

    let tip_el = document.querySelector('.tip-wrap .tip');
    tip_el.innerText = 'Rs' + total_tip.toFixed(2);
}



