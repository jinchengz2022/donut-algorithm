// 2020.12.07
// brute force
export const sumOddLengthSubarrays = (nums: number[]) => {
  if (!nums || nums.length === 0) return 0;
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    // 区间为奇数的循环 每次加2
    // j + i 区间长度不能超过遍历数组长度
    for (let j = 1; j + i <= nums.length; j += 2) {
      // 累加区间的值，从i的索引开始并且遍历长度为所要遍历区间的长度
      for (let k = i; k < j + i; k++) {
        result = result + nums[k]
      }
    }
  }
  return result;
}

// 前缀和
export const sumOddLengthSubarrays1 = (nums: number[]) => {
  if (!nums || nums.length === 0) return 0;
  let result = 0;
  const preFixSum: number[] = [nums[0]];
  for (let i = 0; i < nums.length; i++) {
    preFixSum[i + 1] = preFixSum[i] + nums[i];
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = 1; j + i <= nums.length; j += 2) {
      result = result + preFixSum[i + j] - preFixSum[i]
    }
  }
  return result;
}

console.log(sumOddLengthSubarrays1([1, 4, 2, 5, 3]));
