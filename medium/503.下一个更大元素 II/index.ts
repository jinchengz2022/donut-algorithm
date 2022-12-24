// 2022.12.24
// 单调栈
function nextGreaterElements(nums: number[]): number[] {
  if (!nums || nums.length === 0) return [];

  const result: number[] = [];

  for (let i = 0; i < nums.length; i++) {
      // 当前元素后一位开始循环
      for (let j = i + 1; j < nums.length; j++) {
          if (nums[j] > nums[i]) {
              result.push(nums[j]);
              break;
          }
      }
      // 从第一个元素开始循环到i，注意得循环到它本身
      for (let k = 0; k <= i; k++) {
          if ((nums[k] > nums[i]) && result.length === i) {
              result.push(nums[k]);
              break;
          }
          if (
              result.length === i &&
              nums[k] <= nums[i] &&
              k === i
          ) {
              result.push(-1);
          }
      }
  }

  return result;
};