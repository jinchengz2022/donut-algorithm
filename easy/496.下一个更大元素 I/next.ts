// 2022.12.24
// 单调栈
function nextGreaterElement(nums1: number[], nums2: number[]): number[] {
  const result: number[] = [];
  const indexMap = new Map(nums2.map((k, v) => [k, v]));

  for (let i = 0; i < nums1.length; i++) {
    // 记录值对应的索引位置
    const indexJ = indexMap.get(nums1[i]);
    for (let j = indexJ; j < nums2.length; j++) {
      // 若有大于的值直接添加并且结束当前循环
      if (nums2[j] > nums1[i]) {
        result.push(nums2[j]);
        break;
      }
      // 当遍历到最后一个值并且result并没有添加新值时
      if (
        j === nums2.length - 1 &&
        nums2[j] <= nums1[i] &&
        result.length === i
      ) {
        result.push(-1);
      }
    }
  }

  return result;
};