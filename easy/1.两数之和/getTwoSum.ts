// 2022.12.04
// brute force暴力解法
// 时间复杂度：O(nlogn)，空间复杂度：O(1)
export const getTwoSum1 = (nums: number[], target: number): number[] => {
  if (nums.length === 0) return nums;
  for (let i = 0; i <= nums.length; i++) {
    for (let j = i + 1; j <= nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}

// 2022.12.04
// 排序+双指针
// 时间复杂度：O(n)，空间复杂度：O(1)
export const getTwoSum2 = (nums: number[], target: number): number[] => {
  if (nums.length === 0) return nums;
  // 先从小到大排序
  // const sortNums = nums.sort((a, b) => a - b);
  // 头尾指针
  let start = 0, end = nums.length - 1;
  while (start < end) {
    if (nums[start] + nums[end] === target) {
      return [start, end];
    }
    if (nums[start] + nums[end] < target) {
      start++;
    }
    if (nums[start] + nums[end] > target) {
      end--;
    }
  }
  return [];
}


// no light
// const getTwoSum = (nums: number[], target: number) => {
//   if (nums.length < 2 || !nums) return nums;
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         return [i, j];
//       }
//     }
//   }
//   return nums;
// }
// const getTwoSum = (nums: number[], target: number) => {
//   if (nums.length < 2 || !nums) return nums;
//   const sortAry = nums.sort((a, b) => a - b);
//   let left = 0, right = nums.length - 1;
//   while(left < right) {
//     if(sortAry[left] + sortAry[right] < target) {
//       left++;
//     }
//     if(sortAry[left] + sortAry[right] < target) {
//       right--;
//     }
//     if(sortAry[left] + sortAry[right] === target) {
//       return[sortAry[left], sortAry[right]]
//     }
//   }
//   return nums;
// }

// 2022.12.11  review
// function twoSum(nums: number[], target: number): number[] {
//   if(!nums || nums.length === 0) return [];

  // let left = 0;
  // let right = nums.length - 1;

  // while(left < right) {
  //     const sum = nums[left] + nums[right];
  //     if(sum === target) {
  //         return [left, right]
  //     }
  //     if(sum > target) {
  //         right--;
  //     }
  //     if(sum < target) {
  //         left++;
  //     }
  // }
//   for(let i = 0; i < nums.length; i++) {
//       for(let j = i + 1; j < nums.length; j++) {
//           const sum = nums[i] + nums[j];
//           if(sum === target) {
//               return [i, j];
//           }
//       }
//   }
//   return [];
// };

export const getTwoSum3 = (nums: number[], target: number) => {
  if(nums.length === 0 || !nums) return [];

  // const numsMap = new Map(nums.map((k, v) => [k, v]));

  for(let i = 0; i < nums.length - 1; i++) {

    // if(numsMap.get(target - nums[i])) {
    //   return [i, numsMap.get(target - nums[i])]
    // }

    for(let j = i + 1; j < nums.length; j++) {
      if(nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
  
  return [];
}

console.log(getTwoSum2([2, 5, 9, 37, 0], 9));
