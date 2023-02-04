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

export function searchInsert1(nums: number[], target: number): number {
  if(!nums || nums.length === 0) return -1;

  let left = 0, right = nums.length - 1;
  
  while(left + 1 < right) {
      const mid = Math.floor((left + right) / 2);

      if(nums[mid] === target) {
          right = mid;
      }
      if(nums[mid] < target) {
          left = mid;
      }
      if(nums[mid] > target) {
          right = mid;
      }
  }

  if(nums[left] >=target) {
      return left;
  }
  if(nums[right] >= target) {
      return right;
  }

  return right + 1;
};