// 2022.12.05
// brute force
export const sortAry1 = <T extends number[]>(nums: T): T => {
  const result: T = [] as T;
  for(let i = 0; i < nums.length; i++) {
    if(nums[i] % 2 === 0) {
      result.unshift(nums[i])
    }
    if(nums[i] % 2 !== 0) {
      result.push(nums[i])
    }
  }
  return result;
}

// 双指针
export const sortAry2 = <T extends number[]>(nums: T): T => {
  let left = 0, right = nums.length - 1;
  while(left < right) {
    // left < right 边界判断
    // 左指针若遇到偶数则一直往右移动
    while(left < right && (nums[left] % 2 === 0)) {
      left++;
    }
    // 右指针若遇到奇数则一直往左移动
    while(left < right && (nums[right] % 2 !== 0)) {
      right--;
    }
    // 左指针为奇数&右指针为偶数的情况下交换两元素位置
      if(left < right) {
      const [j, k] = [nums[left], nums[right]];
      nums[left] = k;
      nums[right] = j;
    }
  }
  return nums;
}

// 2022.12.06
function sortArrayByParity(nums: number[]): number[] {
  if(!nums || nums.length < 2) return nums;
  // 双指针 左指针与右指针比较 左奇右偶 ---> 交换 左偶右奇 ---> 左指针后移 右指针前移
  let left = 0, right = nums.length - 1;
  while(left < right) {
      if(nums[left] % 2 === 0) {
          left++;
      }
      if(nums[right] % 2 !== 0) {
          right--;
      }
      if(left < right && (nums[left] % 2 !== 0 && nums[right] % 2 === 0)) {
          const [j, k] = [nums[left], nums[right]]
          nums[left++] = k;
          nums[right--] = j;
      }
  }
  return nums;
};

// 2022.12.11  review
// function sortArrayByParity(nums: number[]): number[] {
//   if(!nums || nums.length === 0) return [];
//   let left = 0;
//   let right = nums.length - 1;

//   while(left < right) {
//       if(nums[left] % 2 !== 0 && nums[right] % 2 === 0) {
//           const [j, k] = [nums[left], nums[right]];
//           nums[left++] = k;
//           nums[right--] = j;
//       }

//       if(nums[left] % 2 === 0) {
//           left++;
//       }

//       if(nums[right] % 2 !== 0) {
//           right--;
//       }
//   }
//   return nums;
// };

console.log(sortAry2([1,2,33,6,7,23,9]));
