function searchInsert(nums: number[], target: number): number {
  if (nums.length === 0) return 0;

  let left = 0, right = nums.length - 1;

  while (left <= right) {
    if (nums[left] === target) {
      return left;
    }
    if (nums[right] === target) {
      return right;
    }
    if (nums[left] > target) {
      return left;
    }
    if (nums[right] < target) {
      return right + 1;
    }
    if (nums[left] < target) {
      left++;
    }
    if (nums[right] > target) {
      right--;
    }
  }
  return 0;
};