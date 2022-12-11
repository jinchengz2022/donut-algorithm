// 2022.12.10
function productExceptSelf(nums: number[]): number[] {
  if (nums.length === 0 || !nums) return [];
  let left = [1];
  let right = Array(nums.length);
  right[nums.length - 1] = 1;
  let result = [];

  // 计算索引左边的累积值
  for (let i = 1; i < nums.length; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }

  // 计算索引右边的累积值
  for (let i = nums.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  // ex: [1, 2, 3, 4]
  // left: [1, 1, 2, 6]
  // right: [24, 12, 4, 1]
  // result: [24, 12, 8, 6]

  for (let i = 0; i < nums.length; i++) {
    result[i] = left[i] * right[i]
  }

  // for (let i = 1; i < nums.length; i++) {
  //   result[i] = result[i - 1] * nums[i - 1];
  // }

  // // 相当于记录上面写的right数组
  // let log = 1;
  // for (let i = nums.length - 1; i >= 0; i--) {
  //   result[i] = log * result[i];
  //   log = log * nums[i];
  // }
  return result;
};