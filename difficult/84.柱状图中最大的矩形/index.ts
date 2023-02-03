// 2022.12.25
function largestRectangleArea(heights: number[]): number {

  const nextGreaterNumber = (
    nums: number[],
    direction: 'left' | 'right'
  ): number[] => {
    const stack: number[] = [];
    const isRight = direction === 'right';
    const popStack: number[] = heights.map(() => isRight ? heights.length : -1);

    for (
      let i = isRight ? 0 : nums.length - 1;
      isRight ? i < nums.length : i >= 0;
      isRight ? i++ : i--
    ) {
      while (
        stack.length !== 0 &&
        nums[stack[stack.length - 1]] > nums[i]
      ) {
        popStack[stack.pop()] = i;
      }
      stack.push(i);
    }
    return popStack;
  }

  const left = nextGreaterNumber(heights, 'left');
  const right = nextGreaterNumber(heights, 'right');
  let result = 0;

  // 优化
  // const left = Array(heights.length);
  //  const right = heights.map(() => heights.length);
  //  const stack: number[] = [];
  //  let result = 0;

  // 绝对递增栈
  //  for (let i = 0; i < heights.length; i++) {
  //      while (
  //          stack.length !== 0 &&
  //          heights[stack[stack.length - 1]] >= heights[i]
  //       ) {
  //          right[stack.pop()] = i;
  //       }
  //       // 从左到右递增栈做出栈后操作时栈顶值即为对应从右到左的递增栈
  //       left[i] = stack.length === 0 ? -1 : stack[stack.length - 1];
  //       stack.push(i);
  //   }

  for (let i = 0; i < heights.length; i++) {
    console.log((right[i] - left[i] - 1) * heights[i])
    result = Math.max(result, (right[i] - left[i] - 1) * heights[i]);
  }
  return result;

};

// 2023.2.3 review
export function largestRectangleArea2(heights: number[]): number {
  if(heights.length === 0 || !heights) return -1;

  const minRightStack: number[] = new Array(heights.length).fill(heights.length);
  const minLeftStack: number[] = new Array(heights.length).fill(-1);
  const stack: number[] = [];

  for(let j = 0; j < heights.length; j++) {
      while(stack.length !== 0 && heights[stack[stack.length - 1]] > heights[j]) {
          minRightStack[stack.pop()] = j;
      }
      minLeftStack[j] = stack.length === 0 ? -1 : stack[stack.length - 1];
      stack.push(j);
  }

  let result = 0;

  for(let k = 0; k < heights.length; k++) {
      result = Math.max(result, (minRightStack[k] - minLeftStack[k] - 1) * heights[k]);
  }

  return result;

};