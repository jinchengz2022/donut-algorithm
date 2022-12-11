// 2020.12.07
export const subarraySum1 = (nums: number[], k: number) => {
  if (nums.length === 0 || !nums) return 0;
  let result = 0;
  // O(n ^ 2) O(1)
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum = sum + nums[j];
      if (sum === k) {
        result += 1;
      }
    }
  }
  // O(n ^ 2) O(n)
  // const preFixSum = [nums[0]];
  // for(let i = 0; i < nums.length; i++) {
  //   preFixSum[i + 1] = preFixSum[i] + nums[i]
  // }
  // for(let i = 0; i < nums.length; i++) {
  //   for(let j = i; j < nums.length; j++) {
  //     if((preFixSum[j + 1] - preFixSum[i]) === k) {
  //       result += 1;
  //     }
  //   }
  // }
  return result;
}

// 2022.12.08
function subarraySum2(nums: number[], k: number): number {
  if (nums.length === 0 || !nums) return 0;
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum = sum + nums[j];
      if (sum === k) {
        result += 1;
      }
    }
  }
  return result;
};

console.log(subarraySum2([1, 2, 3], 3));
