let count = 0;

function runCount() {
    console.log(count);
    count++;
    setTimeout(runCount, 1000);
}

runCount();