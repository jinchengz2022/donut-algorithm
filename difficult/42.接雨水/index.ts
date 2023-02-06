export function trap1(height: number[]): number {
  if (!height || height.length === 0) {
      return -1;
  }

  const stack: number[] = [];
  let result = 0;

  // 单调递减栈
  // 当破坏单调性时可计算雨水面积
  for (let i = 0; i < height.length; i++) {
      while (
          stack.length !== 0 &&
          height[stack[stack.length - 1]] < height[i]) {
          const peekValue = stack.pop();

          if(stack.length === 0) {
              break;
          }

          const left = stack[stack.length - 1];
          const right = i;
          // 找到边界最小值 - 出栈元素即为高
          result += ((Math.min(height[left], height[right]) -
              height[peekValue]) * (right - left - 1))
      }

      stack.push(i);
  }

  return result;

};