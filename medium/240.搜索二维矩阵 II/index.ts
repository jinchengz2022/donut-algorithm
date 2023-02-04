export function searchMatrix(matrix: number[][], target: number): boolean {
  if(matrix.length === 0 || matrix[0].length === 0 || !matrix) {
      return false;
  }

  let rowIndex = matrix.length - 1, colIndex = 0;

  // 上减下右增(找递增递减规律)
  while(rowIndex >= 0 && colIndex < matrix[0].length) {
      if(matrix[rowIndex][colIndex] === target) {
          return true;
      }
      if(matrix[rowIndex][colIndex] > target) {
          rowIndex--;
          continue;
      }
      if(matrix[rowIndex][colIndex] < target) {
          colIndex++;
          continue;
      }
  }

  return false;

};