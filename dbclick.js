const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const textarea = document.getElementById('textarea');

let time = new Date().getTime(), difference = 0, count = 1;
ctx.fillStyle = "green";
ctx.fillRect(0, 0, canvas.width, canvas.height);

function test(){
    difference = (new Date().getTime() - time) / 1000;
    time = new Date().getTime();
    if (difference < 0.080){
        ctx.fillStyle = "red";
        ctx.fillRect(0, 0, canvas.width, canvas.height)
        document.getElementById('count').innerHTML = "Double click count: " + count++;
    }
    else{
        ctx.fillStyle = "green";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    textarea.value = difference + "\n" + textarea.value;
}

window.onload = function(){
    textarea.value = "";
}