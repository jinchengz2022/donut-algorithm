// 2022.12.25
function minSubArrayLen(target: number, nums: number[]): number {
  if (!nums || nums.length === 0) return 0;

  let minLength = nums.length + 1;

  for (let i = 0; i < nums.length; i++) {
      let sum = nums[i];
      if (nums[i] >= target) return 1;
      for (let j = i + 1; j < nums.length; j++) {
          sum += nums[j];
          if (nums[j] >= target) return 1;
          if (sum >= target) {
              minLength = Math.min(minLength, j - i + 1);
              break;
          }
      }
  }
  return minLength !== nums.length + 1 ? minLength : 0;
};