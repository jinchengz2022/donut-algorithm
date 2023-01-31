export const searchRange = (nums: number[], target: number): number[] => {
  if (!nums || nums.length === 0) return [-1, -1];

  /**
   * 
   * @param leftBound 左边界值
   * @param rightBound 右边界值
   * @param leftOrRightRange 得到左/右边界的下标
   * @param numbers 操作的数组
   * @returns 
   */
  const findRange = (
    leftBound: number,
    rightBound: number,
    leftOrRightRange: 'left' | 'right',
    numbers: number[]
  ): number => {
    let left = leftBound,
      right = rightBound,
      result = -1;

    while (left + 1 < right) {
      const mid = Math.floor((left + right) / 2);

      if (numbers[mid] === target) {
        // 若取右边界值则left指针往后移
        if (leftOrRightRange === 'right') {
          left = mid;
        } else {
          right = mid;
        }
      }
      if (numbers[mid] > target) {
        right = mid;
      }
      if (numbers[mid] < target) {
        left = mid;
      }

      // 若取右边界则把left的值赋值给result
      // left指针不断向右而right则不断向左靠近（两者取值与之前的逻辑相反）
      if (numbers[left] === target) {
        result = left;
      }
      if (numbers[right] === target) {
        result = right;
      }
    }

    return result;
  }

  return [
    findRange(0, nums.length - 1, 'left', nums),
    findRange(0, nums.length - 1, 'right', nums)
  ]

};