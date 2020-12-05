    function showTime() {
    // current time is in 24-hour format
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();

    //change 24-hour clock to 12-hour clock
    hours = hours % 12;

    // To display "0" as "12"
    // 0 represents false in this ternary condition
    hours = hours ? hours : 12

    //make single digit hour and minute value to double digit by adding 0 infront
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // Check whether AM or PM
    var am_pm = hours >= 12 ? 'PM' : 'AM';
    var timeNow = hours + ':' + minutes + ':' + seconds + ' ' + am_pm
    document.getElementById("digitalClock").innerText = timeNow;

    setTimeout(showTime, 1000);
}

    showTime();
