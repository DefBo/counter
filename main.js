var timer;

function startCount() {
    timer = setInterval(count, 1500); // 1500 = 1500ms delay between counter changes. Lower num = faster, Bigger = slower.
}

function count() {
    var rand_no = Math.ceil(9 * Math.random()); // 9 = random decrement amount. Counter will decrease anywhere from 1 - 9.
    var el = document.getElementById('counter');
    var currentNumber = parseFloat(el.innerHTML);
    var newNumber = currentNumber - rand_no;
    if (newNumber > 0) {
        el.innerHTML = newNumber;
    } else {
        window.location.replace("http://andriiv.com"); // When the countdown is 0 user is redirected to this link - http://andriiv.com
    }
}