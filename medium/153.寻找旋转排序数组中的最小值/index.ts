function findMin(nums: number[]): number {
  if(!nums || nums.length === 0) return -1;

  let left = 0, right = nums.length - 1;

  while(left + 1 < right) {
      const mid = Math.floor((right + left) / 2);

      // 未旋转过的数组
      if(nums[left] < nums[right]) {
          return nums[left];
      }
      if(nums[mid] > nums[left]) {
          left = mid;
      } else {
          right = mid;
      }
  }

  return Math.min(nums[left], nums[right]);
};