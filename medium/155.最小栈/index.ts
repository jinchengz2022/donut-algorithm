class MinStack {
  private stack: number[];
  private minStack: number[];

  constructor() {
    this.stack = [];
    this.minStack = [];
  }

  push(val: number): void {
    // 存在元素时新元素与栈顶元素比较 
    if (this.minStack.length !== 0) {
      this.minStack.push(Math.min(val, this.minStack[this.minStack.length - 1]));
    } else {
      // 最小栈没有元素时第一个即为最小值
      this.minStack.push(val);
    }
    this.stack.push(val);
  }

  pop(): void {
    // 两个栈的元素同步
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    // 栈顶元素
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    // 最小栈栈顶即为最小值
    return this.minStack[this.minStack.length - 1];
  }
}