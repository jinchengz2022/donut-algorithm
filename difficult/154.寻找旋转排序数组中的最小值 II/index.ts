export function findMin(nums: number[]): number {
  if(!nums || nums.length === 0) return -1;

  let left = 0, right = nums.length - 1;

  while(left + 1 < right) {
      const mid = Math.floor((left + right) / 2);

      if(nums[left] < nums[right]) {
          return nums[left];
      }
      // 1,2,3,0,1
      if(nums[left] < nums[mid]) {
          left = mid;
      }
      // 7,0,1,2,3
      if(nums[left] > nums[mid]) {
          right = mid;
      }
      // 2,2,2,0,1
      if(nums[left] === nums[mid]) {
          left++;
      }
  }

  return Math.min(nums[left], nums[right]);

};