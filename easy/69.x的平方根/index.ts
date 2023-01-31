function mySqrt(x: number): number {
  if (!x) return 0;
  if(x === 1) return 1;

  let left = 0, right = x;

  while (left < right) {
      const mid = Math.floor((left + right) / 2);

      // 除不尽（无整数平方根）时取mid
      if (left + 1 === right) return mid;

      if ((mid * mid) === x) return mid;
      if ((mid * mid) < x) {
          left = mid;
      };
      if ((mid * mid) > x) {
          right = mid;
      }
  }

  return 0;

};