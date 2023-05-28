var timer = [00, 00, 00, 00];
var startBtn = document.getElementById("start");
var stopBtn = document.getElementById("stop");
var repeatBtn = document.getElementById("repeat");

const setZero = (n) => {
    if (n >= 0 && n <= 9) {
        return "0" + n;
    }
    return n;
}

stopBtn.style.display = "none";
repeatBtn.style.display = "none";

const start = () => {
    startBtn.style.display = "none";
    stopBtn.style.display = "block";
    counter = setInterval(() => {
        timer[3]++;
        document.getElementById("timer").innerText = `${setZero(timer[0])}:${setZero(timer[1])}:${setZero(timer[2])}:${setZero(timer[3])}`;
        if (timer[3] == 100) {
            if (timer[2] == 59) {
                if (timer[1] == 59) {
                    timer[0]++;
                    timer[1] = 0;
                    timer[2] = 0;
                    timer[3] = 0;
                } else {
                    timer[1]++;
                    timer[2] = 0;
                    timer[3] = 0;
                }
            } else {
                timer[2]++;
                timer[3] = 0;
            }
        }
    }, 10);
}

const stop = () => {
    clearInterval(counter);
    startBtn.innerText = "restart";
    startBtn.style.display = "block";
    stopBtn.style.display = "none";
    repeatBtn.style.display = "block";
}

const repeat = () => {
    timer = [00, 00, 00, 00];
    document.getElementById("timer").innerText = `${setZero(timer[0])}:${setZero(timer[1])}:${setZero(timer[2])}:${setZero(timer[3])}`;
    stopBtn.style.display = "none";
    repeatBtn.style.display = "none";
    startBtn.innerText = "start";
}

document.getElementById('start').addEventListener('click', start);

document.getElementById('stop').addEventListener('click', stop);

document.getElementById('repeat').addEventListener('click', repeat);