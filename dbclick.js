const testArea = document.getElementById("testArea")
const timesTextArea = document.getElementById("times");

let time = new Date().getTime(), difference = 0, count = 1;

test = (event) => {
    if (event.target === timesTextArea) {
        return;
    }

    difference = (new Date().getTime() - time) / 1000;
    time = new Date().getTime();

    if (difference < 0.08){
        testArea.style.background = "rgb(236, 53, 53)";
        timesTextArea.style.background = "rgb(236, 53, 53)";
        window.setTimeout(() => {
            testArea.style.background = "white"
            timesTextArea.style.background = "white"
        }, 3000)
        document.getElementById('count').innerHTML = "Double click count: " + count++;
    }
    timesTextArea.value = difference + "\n" + timesTextArea.value;
}

window.onload = function(){
    timesTextArea.value = "";
}