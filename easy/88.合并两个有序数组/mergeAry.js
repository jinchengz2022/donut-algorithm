"use strict";
exports.__esModule = true;
exports.mergeAry = void 0;
// 2022.12.05
// 同向指针
var mergeAry = function (nums1, m, nums2, n) {
    var index1 = 0;
    var index2 = 0;
    var resultIndex = 0;
    var result = Array(m + n);
    // [1, 6, 8]
    // [2, 7, 10]
    // index1 = 0 ---> 1
    // index2 = 0 ---> 2
    // result数组push小的数然后对应指针后移
    while (index1 < m && index2 < n) {
        // 数组1的指的数小于数组2指的数时赋值并且数组1指针后移
        if (nums1[index1] <= nums2[index2]) {
            // resultIndex++;
            // index1++;
            result[resultIndex++] = nums1[index1++];
        }
        else {
            result[resultIndex++] = nums2[index2++];
        }
    }
    console.log(resultIndex, index1, index2);
    // 上个while循环完后总会剩下一个未遍历完，需要单独把未遍历完的加上
    while (index1 < m) {
        result[resultIndex++] = nums1[index1++];
    }
    while (index2 < n) {
        result[resultIndex++] = nums2[index2++];
    }
    for (var i = 0; i < m + n; i++) {
        nums1[i] = result[i];
    }
    return nums1;
};
exports.mergeAry = mergeAry;
console.log((0, exports.mergeAry)([1, 6, 8], 3, [3, 5, 9], 3));
