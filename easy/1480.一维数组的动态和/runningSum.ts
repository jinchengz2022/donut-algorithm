export const runningSum = <T extends number[]>(nums: T): T => {
  if(!nums || nums.length < 2) return nums;
  const result: T = [nums[0]] as T;
  for (let i = 1; i < nums.length; i++) {
      result[i] = nums[i] + result[i - 1];
  }
  return result
}

// 2020.12.07
// function runningSum(nums: number[]): number[] {
//   const result: number[] = [];
//   for(let i = 0; i < nums.length; i++) {
//       result[i] = i === 0 ? nums[i] : (
//           nums[i] + result[i - 1]
//       )
//   }
//   return result;
// };

// 2022.12.11  review
// function runningSum(nums: number[]): number[] {
//   if(!nums || nums.length === 0) return [];

//   const preFixSum = [nums[0]];
//   for(let i = 1; i < nums.length; i++) {
//       preFixSum[i] = nums[i] + preFixSum[i - 1];
//   }
//   return preFixSum;
// };