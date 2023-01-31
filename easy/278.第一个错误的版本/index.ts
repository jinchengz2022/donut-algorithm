

export const solution = function (isBadVersion: (x: number) => boolean) {

  return function (n: number): number {
    let left = 1, right = n;

    while (left < right) {
      const mid = Math.floor((left + right) / 2);

      if (isBadVersion(mid)) {
        // 如果为错误版本则移动right指针到mid位置
        right = mid;
      } else {
        // 不为错误版本left指针在mid基础上加1，left加到和right相等则结束循环
        left = mid + 1;
      }

    }

    return left;
  };
};