let redBtn = document.querySelector(".red-circle")
let yellowBtn = document.querySelector(".yellow-circle")
let greenBtn = document.querySelector(".green-circle")

setInterval(func, 30000)

var backcounter = 30
let counter_interval = setInterval((counter_func), 1000)

function counter_func() {
    console.log("please, wait " + backcounter-- + " seconds...")
    if (backcounter <= 0) {
        clearInterval(counter_interval)
    }
}

function func() {
    var counter = 0
    var red_interval = setInterval(red_func, 1000);
    function red_func() {
        redBtn.style.opacity = "1"
        redBtn.style.boxShadow = "0px 0px 95px 0px rgba(237, 157, 145, 1)";
        console.log(++counter);

        if (counter >= 11) {
            clearInterval(red_interval)
            counter = 0
            redBtn.style.opacity = "0.6"
            redBtn.style.boxShadow = "none";

            var yellow_interval = setInterval(yellow_func, 1000);
            function yellow_func() {
                yellowBtn.style.opacity = "1"
                yellowBtn.style.boxShadow = "0px 0px 95px 0px rgba(235, 241, 120, 1)";
                console.log(++counter);

                if (counter >= 3) {
                    clearInterval(yellow_interval)
                    counter = 0
                    yellowBtn.style.opacity = "0.6"
                    yellowBtn.style.boxShadow = "none";

                    var green_interval = setInterval(green_func, 1000);
                    function green_func() {
                        greenBtn.style.opacity = "1"
                        greenBtn.style.boxShadow = "0px 0px 95px 0px rgba(140, 241, 111, 1)";
                        console.log(++counter);

                        if (counter >= 16) {
                            clearInterval(green_interval)
                            counter = 0
                            greenBtn.style.opacity = "0.6"
                            greenBtn.style.boxShadow = "none";
                        }
                    }
                }
            }
        }
    }
}






