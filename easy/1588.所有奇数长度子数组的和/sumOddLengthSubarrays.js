"use strict";
exports.__esModule = true;
exports.sumOddLengthSubarrays1 = exports.sumOddLengthSubarrays = void 0;
// 2020.12.07
// brute force
var sumOddLengthSubarrays = function (nums) {
    if (!nums || nums.length === 0)
        return 0;
    var result = 0;
    for (var i = 0; i < nums.length; i++) {
        // 区间为奇数的循环
        for (var j = 1; j + i <= nums.length; j += 2) {
            // 累加区间的值
            for (var k = i; k < j + i; k++) {
                result = result + nums[k];
            }
        }
    }
    return result;
};
exports.sumOddLengthSubarrays = sumOddLengthSubarrays;
// 前缀和
var sumOddLengthSubarrays1 = function (nums) {
    if (!nums || nums.length === 0)
        return 0;
    var result = 0;
    var preFixSum = [nums[0]];
    for (var i = 0; i < nums.length; i++) {
        preFixSum[i + 1] = preFixSum[i] + nums[i];
    }
    console.log(preFixSum);
    for (var i = 0; i < nums.length; i++) {
        for (var j = 1; j + i <= nums.length; j += 2) {
            result = result + preFixSum[i + j] - preFixSum[i];
        }
    }
    return result;
};
exports.sumOddLengthSubarrays1 = sumOddLengthSubarrays1;
console.log((0, exports.sumOddLengthSubarrays1)([1, 4, 2, 5, 3]));
