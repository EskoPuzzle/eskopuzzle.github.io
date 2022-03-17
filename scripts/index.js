// Ooh, someone is looking in my code...
// You deserve to know the truth, and the truth is this:
// You are playing with fire, trying to hunt us down
// This will only end in disaster for you
// But anyways, I comment all of my code and I hope you understand it :D

function countdown() {
    // Setup a date
    future = Date.parse("mar 18, 2022 14:00 CST");

    // Grab the difference between the current date, and the future
    now = new Date();
    diff = future - now;

    // Grab our time until in days, hours, minutes, and seconds
    days = Math.floor(diff / (1000 * 60 * 60 * 24));
    hours = Math.floor(diff / (1000 * 60 * 60));
    mins = Math.floor(diff / (1000 * 60));
    secs = Math.floor(diff / 1000);

    // Make it so they are relative to one another
    d = days;
    h = hours - days * 24;
    m = mins - hours * 60;
    s = secs - mins * 60;

    if (diff > 0) {
        console.log(diff)
        // Populate our timer :D
        document.getElementById("t").innerHTML =
            '<div>' + d + '<span>Days</span></div>' +
            '<div>' + h + '<span>Hours</span></div>' +
            '<div>' + m + '<span>Minutes</span></div>' +
            '<div>' + s + '<span>Seconds</span></div>';
    } else {
        console.log("timer expired")
        //Updated :D
        location.replace("reveal.html")
    }
}
// Update our timer
setInterval('countdown()', 1000);