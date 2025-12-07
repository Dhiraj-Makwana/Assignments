function timeToCalculateSum(n) {
    const start = Date.now(); // start time

    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    const end = Date.now(); // end time

    console.log(`Sum = ${sum}`);
    console.log(`Time taken for n = ${n}: ${(end - start) / 1000} seconds`);
}

timeToCalculateSum(10000000000)