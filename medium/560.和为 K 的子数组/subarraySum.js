"use strict";
exports.__esModule = true;
exports.subarraySum = void 0;
var subarraySum = function (nums, k) {
    if (nums.length === 0 || !nums)
        return 0;
    var result = 0;
    // for(let i = 0; i < nums.length; i++) {
    //   let sum = 0;
    //   for(let j = i; j < nums.length; j++) {
    //     sum = sum +nums[j];
    //     if(sum === k) {
    //       result += 1;
    //     }
    //   }
    // }
    var preFixSum = [nums[0]];
    for (var i = 0; i < nums.length; i++) {
        preFixSum[i + 1] = preFixSum[i] + nums[i];
    }
    for (var i = 0; i < nums.length; i++) {
        for (var j = i; j < nums.length; j++) {
            if ((preFixSum[j + 1] - preFixSum[i]) === k) {
                result += 1;
            }
        }
    }
    return result;
};
exports.subarraySum = subarraySum;
console.log((0, exports.subarraySum)([1, 2, 3], 3));
