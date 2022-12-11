"use strict";
exports.__esModule = true;
exports.sortAry2 = exports.sortAry1 = void 0;
// 2022.12.05
// brute force
var sortAry1 = function (ary) {
    var result = [];
    for (var i = 0; i < ary.length; i++) {
        if (ary[i] % 2 === 0) {
            result.unshift(ary[i]);
        }
        if (ary[i] % 2 !== 0) {
            result.push(ary[i]);
        }
    }
    return result;
};
exports.sortAry1 = sortAry1;
// 双指针
var sortAry2 = function (ary) {
    var left = 0, right = ary.length - 1;
    while (left < right) {
        // left < right 边界判断
        // 左指针若遇到偶数则一直往右移动
        while (left < right && (ary[left] % 2 === 0)) {
            left++;
        }
        // 右指针若遇到奇数则一直往左移动
        while (left < right && (ary[right] % 2 !== 0)) {
            right--;
        }
        // 左指针为奇数&右指针为偶数的情况下交换两元素位置
        if (left < right) {
            var _a = [ary[left], ary[right]], j = _a[0], k = _a[1];
            ary[left] = k;
            ary[right] = j;
        }
    }
    return ary;
};
exports.sortAry2 = sortAry2;
console.log((0, exports.sortAry2)([1, 2, 33, 6, 7, 23, 9]));
