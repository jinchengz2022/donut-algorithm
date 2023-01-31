function search(nums: number[], target: number): number {
  if (nums.length === 0 || !nums) return -1;

  let left = 0, right = nums.length - 1;

  while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      // 从中间元素开始找并改变指针位置
      if (nums[mid] < target) {
          left = mid;
      } else if (nums[mid] > target) {
          right = mid;
      } else {
          right = mid;
      }

      if (nums[right] === target) {
          return right;
      }
      if (nums[left] === target) {
          return left;
      }
      if (nums[right] > target) {
          right--;
      }
      if (nums[left] < target) {
          left++;
      }
  }

  return -1;
};