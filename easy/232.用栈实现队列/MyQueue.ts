class MyQueue {
  private stack1: any[];
  private stack2: any[];
  private peekValue: number;
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  push(x: number): void {
    if (this.stack1.length === 0) {
      this.peekValue = x;
    }
    // 先推进stack1
    this.stack1.push(x);
  }

  pop(): number {
    // stack1不为空则将元素全部推进stack2
    if (this.stack2.length === 0) {
      while (this.stack1.length !== 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    // 最终pop的为stack2的栈顶
    return this.stack2.pop();

  }

  peek(): number {
    if (this.stack2.length === 0) {
      return this.peekValue;
    }
    return this.stack2[this.stack2.length - 1]
  }

  empty(): boolean {
    // 因为用两个栈实现的队列所以得判断两个数组长度
    return this.stack1.length === 0 && this.stack2.length === 0;
  }
}