export function searchMatrix(matrix: number[][], target: number): boolean {
  if(!matrix || matrix.length === 0 || matrix[0].length === 0) {
      return false;
  }

  let left = 0, right = matrix.length * matrix[0].length - 1;

  while(left + 1 < right) {
      const mid = Math.floor((left + right) / 2);
      const rowIndex = Math.floor(mid / matrix[0].length);
      const colIndex = mid % matrix[0].length;
      const curValue = matrix[rowIndex][colIndex];

      if(curValue === target) {
          right = mid;
      }
      if(curValue < target) {
          left = mid;
      }
      if(curValue > target) {
          right = mid;
      }
  }

  if(matrix[Math.floor(left / matrix[0].length)][left % matrix[0].length] === target) {
      return true;
  }
  if(matrix[Math.floor(right / matrix[0].length)][right % matrix[0].length] === target) {
      return true;
  }

  return false;

};