function fourSum(nums: number[], target: number): number[][] {
  if (!nums || nums.length < 4) return [];

  const result: number[][] = [];
  const sortNums = nums.sort((a, b) => a - b); // 运用双指针 - 记得排序
  const length = sortNums.length - 1;

  // length-2 : 遍历到倒数第三个元素的长度即可，当取到最后一个元素时循环体内已经取到了剩余元素
  for (let i = 0; i < length - 2; i++) {
    // 去重，若下一个值与当前值相同则结束当前循环从下一个索引开始遍历
    if (i > 0 && sortNums[i] === sortNums[i - 1]) {
      continue;
    }
    for (let j = i + 1; j < length - 1; j++) {
      if (j > i + 1 && sortNums[j] === sortNums[j - 1]) {
        continue;
      }
      let left = j + 1;
      let right = length;
      while (left < right) {
        const sum = sortNums[i] + sortNums[j] + sortNums[left] + sortNums[right];
        if (sum === target) {
          result.push([sortNums[i], sortNums[j], sortNums[left], sortNums[right]]);

          // 去重，如果有相同值则将指针指向该值索引
          while (left < right && sortNums[left] === sortNums[left + 1]) {
            left++;
          }
          // 判断相等后也要记得改变指针索引
          left++;

          while (left < right && sortNums[right] === sortNums[right - 1]) {
            right--;
          }
          right--;
        }
        if (sum < target) {
          left++;
        }
        if (sum > target) {
          right--;
        }
      }
    }
  }

  return result;
};

console.log(fourSum([1, 0, -1, 0, -2, 2], 0));
