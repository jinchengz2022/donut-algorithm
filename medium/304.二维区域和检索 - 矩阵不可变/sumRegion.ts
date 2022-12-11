// 2022.12.08
class NumMatrix {
  private preFixSum: number[][];
  constructor(matrix: number[][]) {
    if (matrix.length === 0 || !matrix) return;
    if (matrix[0].length === 0 || !matrix[0]) return;
    this.preFixSum = [];
    for(let i = 0; i < matrix.length; i++) {
    this.preFixSum[i] = [0];
      for(let j = 0; j < matrix[i].length; j++) {
        this.preFixSum[i][j + 1] = this.preFixSum[i][j] + matrix[i][j];
      }
    }
  }

  sumRegion(row1: number, col1: number, row2: number, col2: number): number {
    if (row1 > row2 || col1 > col2) return 0;
    let result = 0;
    for (let i = row1; i <= row2; i++) {
        result = result + this.preFixSum[i][col2 + 1] - this.preFixSum[i][col1]
    }
    return result;
  }
}