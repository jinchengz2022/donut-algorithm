/**
 * 
 * @param dir 遍历方向
 * @param value 寻找最大数还是最小数
 * @param numsAry 原始数组
 * @returns 
 */
 export const findNextGreaterBigOrSmall = (
  dir: 'left' | 'right',
  value: 'big' | 'small',
  numsAry: number[]
) => {
  const stack: number[] = [];
  const result: number[] = numsAry.map(() => -1);
  const forOfDirection = dir === 'left';
  const whileOfRange = value === 'big';

  // 向左/向右遍历顺序不同
  for (
    let i = (forOfDirection ? numsAry.length - 1 : 0);
    forOfDirection ? i >= 0 : i < numsAry.length;
    forOfDirection ? i-- : i++
  ) {
    // 取大取小判断条件不同
    // 取大的情况小则为递减栈（栈低大栈顶小）
    // 栈顶值与遍历值比较
    while (
      stack.length !== 0 &&
      (
        whileOfRange ? (
          numsAry[stack[stack.length - 1]] < numsAry[i]
        ) : (
          numsAry[stack[stack.length - 1]] > numsAry[i]
        )
      )
    ) {
      // 出栈值对应索引值为当前遍历值
      result[stack.pop()] = numsAry[i];
    }
    // 栈存数组索引，利用索引取到出栈的值
    stack.push(i);
  }
  return result;
}

console.log(findNextGreaterBigOrSmall('left', 'small', [3, 1, 2, 5, 8, 6]));
