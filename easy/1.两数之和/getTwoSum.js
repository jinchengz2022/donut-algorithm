"use strict";
exports.__esModule = true;
exports.getTwoSum2 = exports.getTwoSum1 = void 0;
// 2022.12.04
// brute force暴力解法
// 时间复杂度：O(nlogn)，空间复杂度：O(1)
var getTwoSum1 = function (nums, target) {
    if (nums.length === 0)
        return nums;
    for (var i = 0; i <= nums.length; i++) {
        for (var j = i + 1; j <= nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
};
exports.getTwoSum1 = getTwoSum1;
// 2022.12.04
// 排序+双指针
// 时间复杂度：O(n)，空间复杂度：O(1)
var getTwoSum2 = function (nums, target) {
    if (nums.length === 0)
        return nums;
    // 先从小到大排序
    // const sortNums = nums.sort((a, b) => a - b);
    // 头尾指针
    var start = 0, end = nums.length - 1;
    while (start < end) {
        if (nums[start] + nums[end] === target) {
            return [start, end];
        }
        if (nums[start] + nums[end] < target) {
            start++;
        }
        if (nums[start] + nums[end] > target) {
            end--;
        }
    }
    return [];
};
exports.getTwoSum2 = getTwoSum2;
console.log((0, exports.getTwoSum2)([2, 5, 9, 37, 0], 9));
