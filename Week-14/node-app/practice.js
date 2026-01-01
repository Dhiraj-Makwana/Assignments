"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getMax(nums) {
    let maxVal = -1000000;
    for (let num of nums) {
        if (num > maxVal) {
            maxVal = num;
        }
    }
    return maxVal;
}
console.log(getMax([5, 1, 2, 3]));
//# sourceMappingURL=practice.js.map