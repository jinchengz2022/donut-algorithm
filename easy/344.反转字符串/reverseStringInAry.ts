// 2022.12.04
// brute force
// 找关系 --->  ex: [h, e, l, l, o]
//                  0与4交换
//                  1与3交换 ---> 索引相加为stringAry.length - 1
export const reverseStringInAry1 = <T extends string[]>(strAry: T): T => {
  if (strAry.length < 2) return strAry;
  // strAry.length / 2 不用全部遍历取一半即可完成转换
  for (let i = 0; i < strAry.length / 2; i++) {
    // 元素交换
    // const temp = strAry[i];
    // strAry[i] = strAry[strAry.length - i - 1];
    // strAry[strAry.length - i - 1] = temp;

    const [j, k] = [strAry[i], strAry[strAry.length - i - 1]]
    strAry[i] = k;
    strAry[strAry.length - i - 1] = j;
  }
  return strAry;
}

// 2022.12.04
// 双指针
export const reverseStringInAry2 = <T extends string[]>(strAry: T): T => {
  if (strAry.length < 2) return strAry;
  let left = 0, right = strAry.length - 1;
  while(left < right) {
    const [i, j] = [strAry[left], strAry[right]]
    strAry[left] = j;
    strAry[right] = i;
    left++;
    right--;
  }
  return strAry;
}

// 2022.12.11  review
// function reverseString(s: string[]): void {
//   let left = 0;
//   let right = s.length - 1;

//   while(left < right) {
//       const [j, k] = [s[left], s[right]];
//       s[left++] = k;
//       s[right--] = j;

//   }
// };

console.log(reverseStringInAry2(['h', 'e', 'l', 'r', 'o', 'i',]));
