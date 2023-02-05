export function search(nums: number[], target: number): number {
  if (!nums || nums.length === 0) {
      return -1;
  }

  let left = 0, right = nums.length - 1;

  while (left + 1 < right) {
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] === target) {
          return mid;
      }
      // 已旋转过的数组
      if (nums[left] > nums[mid]) {
          // mid < left < right < tar
          // mid < right < tar < left
          // mid < right < left < tar
          if (nums[mid] <= target && target <= nums[right]) {
              left = mid;
          } else {
              right = mid;
          }
      } else {
          // 未旋转过的数组
          if (nums[left] <= target && target <= nums[mid]) {
              right = mid;
          } else {
              left = mid;
          }
      }
  }

  if (nums[left] === target) {
      return left;
  }
  if (nums[right] === target) {
      return right;
  }

  return -1;
};

// review 2.5
export function search1(nums: number[], target: number): number {
  if(!nums || nums.length === 0) return -1;

  let left = 0, right = nums.length - 1;

  while(left + 1 < right) {
      const mid = Math.floor((left + right) / 2);

      if(nums[mid] === target) {
          return mid;
      }

      if(nums[left] > nums[mid]) {
          if(nums[mid] <= target && target <= nums[right]) {
              left = mid;
          } else {
              right = mid;
          }
      } else {
          if(target <= nums[mid] && nums[left] <= target) {
              right = mid;
          } else {
              left = mid;
          }
      }
  }

  if(nums[left] === target) {
      return left;
  }
  if(nums[right] === target) {
      return right;
  }

  return -1;

};