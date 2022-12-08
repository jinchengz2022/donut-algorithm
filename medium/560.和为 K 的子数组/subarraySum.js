"use strict";
exports.__esModule = true;
exports.subarraySum1 = void 0;
// 2020.12.07
var subarraySum1 = function (nums, k) {
    if (nums.length === 0 || !nums)
        return 0;
    var result = 0;
    // O(n ^ 2) O(1)
    for (var i = 0; i < nums.length; i++) {
        var sum = 0;
        for (var j = i; j < nums.length; j++) {
            sum = sum + nums[j];
            if (sum === k) {
                result += 1;
            }
        }
    }
    // O(n ^ 2) O(n)
    // const preFixSum = [nums[0]];
    // for(let i = 0; i < nums.length; i++) {
    //   preFixSum[i + 1] = preFixSum[i] + nums[i]
    // }
    // for(let i = 0; i < nums.length; i++) {
    //   for(let j = i; j < nums.length; j++) {
    //     if((preFixSum[j + 1] - preFixSum[i]) === k) {
    //       result += 1;
    //     }
    //   }
    // }
    return result;
};
exports.subarraySum1 = subarraySum1;
function subarraySum2(nums, k) {
    if (nums.length === 0 || !nums)
        return 0;
    var result = 0;
    for (var i = 0; i < nums.length; i++) {
        var sum = 0;
        for (var k_1 = i; k_1 < nums.length; k_1++) {
            sum = sum + nums[k_1];
            if (sum === k_1) {
                console.log(sum, '222');
                result += 1;
            }
        }
    }
    return result;
}
;
console.log(subarraySum2([1, 2, 3], 3));
