"use strict";
exports.__esModule = true;
exports.reverseStringInAry2 = exports.reverseStringInAry1 = void 0;
// 2022.12.04
// brute force
// 找关系 --->  ex: [h, e, l, l, o]
//                  0与4交换
//                  1与3交换 ---> 索引相加为stringAry.length - 1
var reverseStringInAry1 = function (strAry) {
    if (strAry.length < 2)
        return strAry;
    for (var i = 0; i < strAry.length / 2; i++) {
        // 元素交换
        // const temp = strAry[i];
        // strAry[i] = strAry[strAry.length - i - 1];
        // strAry[strAry.length - i - 1] = temp;
        var _a = [strAry[i], strAry[strAry.length - i - 1]], j = _a[0], k = _a[1];
        strAry[i] = k;
        strAry[strAry.length - i - 1] = j;
    }
    return strAry;
};
exports.reverseStringInAry1 = reverseStringInAry1;
// 2022.12.04
// 双指针
var reverseStringInAry2 = function (strAry) {
    if (strAry.length < 2)
        return strAry;
    var left = 0, right = strAry.length - 1;
    while (left < right) {
        var _a = [strAry[left], strAry[right]], i = _a[0], j = _a[1];
        strAry[left] = j;
        strAry[right] = i;
        left++;
        right--;
    }
    return strAry;
};
exports.reverseStringInAry2 = reverseStringInAry2;
console.log((0, exports.reverseStringInAry2)(['h', 'e', 'l', 'r', 'o', 'i',]));
