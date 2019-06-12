var countdownGenerator = function(x) {
    var countdown = x + 1;

    return function(x) {
        countdown -= 1;

        if (countdown > 0) {
            console.log("T-minus " + countdown);
        }
        if (countdown === 0) {
            console.log("Blast Off!");
        }
        if (countdown < 0) {
            console.log("Rockets already gone, bub!");
        }
    }
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!