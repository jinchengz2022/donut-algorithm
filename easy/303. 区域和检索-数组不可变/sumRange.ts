// 2022.12.06
// 重点：前缀和数组索引从1开始 原始数组从0
// nums[i] = pre[i] - pre[i - 1]
// pre[right] - pre[left] = nums[0] + nums[1] +... nums[right] - (nums[0] +... nums[left])
//                        = nums[left] +... nums[right - 1]
// pre[right + 1] - pre[left] = nums[left] +... nums[right]
// 由此可得 left 到 right之间前缀和公式
export const range = (preFixSum: number[], left: number, right: number) => {
  return preFixSum[right + 1] - preFixSum[left];
}
export const sumRange = (nums: number[], left: number, right: number) => {
  const preFixSum = [0];
  for (let i = 0; i < nums.length; i++) {
    preFixSum[i + 1] = preFixSum[i] + nums[i]
  }
  return range(preFixSum, left, right)
}

// 2022.12.07
// class NumArray {
//   private int[] preFixSum;
//   public NumArray(int[] nums) {
//       preFixSum = new int[nums.length + 1];
//       for(int i = 0; i < nums.length; i++) {
//           preFixSum[i + 1] = nums[i] + preFixSum[i];

//       }
//   }
  
//   public int sumRange(int left, int right) {
//       return preFixSum[right + 1] - preFixSum[left];
//   }
// }

// 2022.12.11  review
// class NumArray {
//   public preFixSum = [0];
//   constructor(nums: number[]) {
//       for (let j = 0; j < nums.length; j++) {
//           this.preFixSum[j + 1] = this.preFixSum[j] + nums[j];
//       }
//   }
//   sumRange(left: number, right: number): number {
//       return this.preFixSum[right + 1] - this.preFixSum[left];
//   }
// }

console.log(sumRange([3, -1, 10, 23, 55, -12, -40], 3, 5));
