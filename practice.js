function findLargestElement(numbers) {
    let large = Number.NEGATIVE_INFINITY;
    for(let i=0; i<numbers.length; i++) {
        if(numbers[i] >= large) {
            large = numbers[i];
        }
    }
    return large;
}

console.log(findLargestElement([-5, -10, -2, -8]));