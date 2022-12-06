"use strict";
exports.__esModule = true;
exports.sumRange = exports.range = void 0;
// 2022.12.06
// nums[i] = pre[i] - pre[i - 1]
// pre[right] - pre[left] = nums[0] + nums[1] +... nums[right] - (nums[0] +... nums[left])
//                        = nums[left] +... nums[right - 1]
// right同时加1
// pre[right + 1] - pre[left] = nums[left] +... nums[right]
// 由此可得 left 到 right之间前缀和公式
var range = function (preFixSum, left, right) {
    return preFixSum[right + 1] - preFixSum[left];
};
exports.range = range;
var sumRange = function (nums, left, right) {
    var preFixSum = [0];
    for (var i = 0; i < nums.length; i++) {
        preFixSum[i + 1] = preFixSum[i] + nums[i];
    }
    console.log({ preFixSum: preFixSum });
    return (0, exports.range)(preFixSum, left, right);
};
exports.sumRange = sumRange;
console.log((0, exports.sumRange)([3, -1, 10, 23, 55, -12, -40], 3, 5));
