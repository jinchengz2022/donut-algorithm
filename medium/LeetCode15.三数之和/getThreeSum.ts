// 2022.12.04
// brute force暴力解法
// 时间复杂度：O(n^3)，空间复杂度：O(1)
export const getThreeSum1 = (nums: number[], target: number): number[] => {
  if (nums.length < 4) return nums;
  for (let i = 0; i <= nums.length - 2; i++) {
    for (let j = i + 1; j <= nums.length - 1; j++) {
      for (let k = j + 1; k <= nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === target) {
          return [i, j, k];
        }
      }
    }
  }
  return [];
}

// 2022.12.04
// 排序+双指针
// 时间复杂度：O(n^2)，空间复杂度：O(1)
export const getThreeSum2 = (nums: number[], target: number = 0): number[] => {
  if (nums.length < 4) return nums;
  const result = [];
  const sortNums = nums.sort((a, b) => a - b);
  // 头尾指针
  // 先拿出第一个元素剩余元素双指针，第一个元素 + 双指针元素 === target
  for (let i = 0; i <= sortNums.length; i++) {
    let start = i + 1, end = sortNums.length - 1, twoSumTarget = target - sortNums[i];
    while (start < end) {
      if (sortNums[start] + sortNums[end] === twoSumTarget) {
        return [sortNums[i], sortNums[start], sortNums[end]];
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
}

console.log(getThreeSum2([0, 5, 9, 37, 7, 4, 10], 11));
