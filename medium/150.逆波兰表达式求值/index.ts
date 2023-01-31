export const evalRPN = (tokens: string[]): number => {
  if (!tokens || tokens.length === 0) return -1;

  const stack: number[] = [];


  /**
   * 计算值
   * @param num1 被除/加/减/乘数
   * @param num2 除/加/减/乘数
   * @param op 操作符
   * @returns 
   */
  const cal = (num1: number, num2: number, op: '+' | '-' | '*' | '/'): number => {
    switch (op) {
      case '+':
        return num2 + num1;
      case '-':
        return num2 - num1;
      case '*':
        return num2 * num1;
      case '/':
        return num2 / num1 > 0 ? Math.floor(num2 / num1) : Math.ceil(num2 / num1);
    }
  }

  for (let i = 0; i < tokens.length; i++) {
    if (['+', '-', '*', '/'].includes(tokens[i])) {
      // 将最后两个元素弹出
      stack.push(cal(
        stack.pop(),
        stack.pop(),
        tokens[i] as '+' | '-' | '*' | '/'
      ));
    } else {
      stack.push(Number(tokens[i]));
    }
  }

  return stack.pop();
};