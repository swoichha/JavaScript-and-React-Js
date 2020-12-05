function calculateCircumference() {

    let radiusOfCircle = document.getElementById('inputRadius').value

    if (isNaN(radiusOfCircle) || radiusOfCircle < 0) {
        let errorMsg = "Please enter a valid number"
        alert(errorMsg)
    }else{
        let circumference = 2 * Math.PI * radiusOfCircle
        document.getElementById('result').value = circumference;
    }
}
