// 2022.12.24
// 单调栈
function dailyTemperatures(temperatures: number[]): number[] {
  const stack: number[] = [];
  const result: number[] = temperatures.map(() => 0);

  for (let i = 0; i < temperatures.length; i++) {
      while (
          stack.length !== 0 &&
          temperatures[stack[stack.length - 1]] < temperatures[i]
      ) {
          const popIndex = stack.pop();
          result[popIndex] = i - popIndex;
      }
      stack.push(i);
  }

  return result;
};