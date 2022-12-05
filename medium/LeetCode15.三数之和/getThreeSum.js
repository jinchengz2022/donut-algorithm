"use strict";
exports.__esModule = true;
exports.getThreeSum2 = exports.getThreeSum1 = void 0;
// 2022.12.04
// brute force暴力解法
// 时间复杂度：O(n^3)，空间复杂度：O(1)
var getThreeSum1 = function (nums, target) {
    if (nums.length < 4)
        return nums;
    for (var i = 0; i <= nums.length - 2; i++) {
        for (var j = i + 1; j <= nums.length - 1; j++) {
            for (var k = j + 1; k <= nums.length; k++) {
                if (nums[i] + nums[j] + nums[k] === target) {
                    return [i, j, k];
                }
            }
        }
    }
    return [];
};
exports.getThreeSum1 = getThreeSum1;
// 2022.12.04
// 排序+双指针
// 时间复杂度：O(n^2)，空间复杂度：O(1)
var getThreeSum2 = function (nums, target) {
    if (target === void 0) { target = 0; }
    if (nums.length < 4)
        return nums;
    var result = [];
    var sortNums = nums.sort(function (a, b) { return a - b; });
    // 头尾指针
    // 先拿出第一个元素剩余元素双指针，第一个元素 + 双指针元素 === target
    for (var i = 0; i < sortNums.length - 2; i++) {
        if (i > 0 && nums[i - 1] === nums[i])
            continue;
        var start = i + 1, end = sortNums.length - 1, twoSumTarget = target - sortNums[i];
        while (start < end) {
            if (sortNums[start] + sortNums[end] === twoSumTarget) {
                result.push([sortNums[i], sortNums[start], sortNums[end]]);
                break;
            }
            if (sortNums[start] + sortNums[end] > twoSumTarget) {
                end--;
            }
            if (sortNums[start] + sortNums[end] < twoSumTarget) {
                start++;
            }
        }
    }
    return result;
};
exports.getThreeSum2 = getThreeSum2;
console.log((0, exports.getThreeSum2)([-1, 0, 1, 2, -1, -4]));
