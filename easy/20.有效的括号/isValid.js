"use strict";
exports.__esModule = true;
exports.isValid2 = void 0;
function isValid(s) {
    if (!s || s.length < 2 || s.length % 2 !== 0)
        return false;
    var stack = [];
    var strEnum = {
        '(': ')',
        '{': '}',
        '[': ']'
    };
    for (var i = 0; i < s.length; i++) {
        // 左括号则入栈
        if (['(', '[', '{'].includes(s[i])) {
            stack.push(s[i]);
        }
        else {
            // 栈中无左括号则直接false
            if (stack.length === 0)
                return false;
            // 不是左括号则判断是否与出栈元素匹配
            if (strEnum[stack.pop()] !== s[i])
                return false;
        }
    }
    return stack.length === 0;
}
;
var isValid2 = function (str) {
    if (!str || str.length % 2 !== 0)
        return false;
};
exports.isValid2 = isValid2;
console.log('{[('.includes('['));
