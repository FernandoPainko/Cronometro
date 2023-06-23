let hour = 0
let minute = 0
let second = 0
let millisec = 0

let cron

function start() {
    cron = setInterval(() => {
        timer();
    }, 10);

}

function timer() {
    if ((millisec += 10) == 1000) {
        millisec = 0;
        second++;
    }
    if (second == 60) {
        second = 0;
        minute++;
    }
    if (minute == 60) {
        minute = 0;
        hour++;
    }
    document.getElementById('hour').innerHTML = returnData(hour);
    document.getElementById('minute').innerHTML = returnData(minute);
    document.getElementById('second').innerHTML = returnData(second);
    document.getElementById('millisec').innerHTML = returnData(millisec);
}

function returnData(input) {
    return input >= 10 ? input : `0${input}`
}


function stop() {
    clearTimeout(cron)
}

function refresh() {
    clearTimeout(cron)
    hour = 0
    minute = 0
    second = 0
    millisec = 0

    document.getElementById('hour').innerText = '00';
    document.getElementById('minute').innerText = '00';
    document.getElementById('second').innerText = '00';
    document.getElementById('millisec').innerText = '000';
}


