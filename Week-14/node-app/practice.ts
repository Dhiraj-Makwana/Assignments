function getMax(nums: number[]) {
    let maxVal: number = -1000000;

    for(let num of nums) {
        if(num > maxVal) {
            maxVal = num;
        }
    }
    return maxVal
}

console.log(getMax([5,1,2,3]))