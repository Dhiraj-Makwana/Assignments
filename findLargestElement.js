/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let large = Number.NEGATIVE_INFINITY;
    if(numbers.length === 0) {
        large = undefined
    }
    for(let i=0; i<numbers.length; i++) {
        if(numbers[i] >= large) {
            large = numbers[i];
        }
    }
    return large;
}

module.exports = findLargestElement;