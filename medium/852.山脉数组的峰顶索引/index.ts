export function peakIndexInMountainArray(arr: number[]): number {
  if (!arr || arr.length === 0) {
      return -1;
  }

  let left = 0, right = arr.length - 1;

  while (left + 1 < right) {
      const mid = Math.floor((left + right) / 2);

      // 单调递增段
      if (arr[mid] > arr[mid + 1]) {
          right--;
      } else {
      // 单调递减段
          left++;
      }
  }

  if(arr[left] > arr[right]) {
      return left;
  } else {
      return right;
  }
};

// review 2.5
export function peakIndexInMountainArray1(arr: number[]): number {
  if(!arr || arr.length === 0) return -1;

  let left = 0, right = arr.length - 1;

  while(left + 1 < right) {
      const mid = Math.floor((left + right) / 2);

      if(arr[mid] > arr[mid + 1]) {
          right--;
      } else {
          left++;
      }
  }

  if(arr[left] > arr[right]) {
      return left;
  } else {
      return right;
  }
};