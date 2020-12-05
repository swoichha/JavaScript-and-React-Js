function calculateTipValue() {
    let total_bill = Number(document.getElementById('total_bill').value);
    let tip_percent = Number(document.getElementById('tip_percent').value);

    console.log(total_bill, tip_percent)
    document.getElementById('totalTip').innerHTML = 'The total tip that you have to pay is: ' + total_bill * (tip_percent / 100);
}
