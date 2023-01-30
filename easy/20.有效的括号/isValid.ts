function isValid(s: string): boolean {
  if (!s || s.length < 2 || s.length % 2 !== 0) return false;
  const stack = [];
  const strEnum = {
      '(': ')',
      '{': '}',
      '[': ']',
  }

  for (let i = 0; i < s.length; i++) {
      // 左括号则入栈
      if (['(', '[', '{'].includes(s[i])) {
          stack.push(s[i]);
      } else {
          // 栈中无左括号则直接false
          if (stack.length === 0) return false;
          // 不是左括号则判断是否与出栈元素匹配
          if (strEnum[stack.pop()] !== s[i]) return false;
      }
  }

  return stack.length === 0;
};

export const isValid2 = (str: string): boolean => {
    if(!str || str.length % 2 !== 0) return false;

    const strEnum = {
        '[': ']',
        '{': '}',
        '(': ')',
    }
    const strStack = [];

    for(let i = 0; i < str.length; i++) {
        if(['[', '{' ,'('].includes(str[i])) {
            strStack.push(str[i]);
        } else {
            if(strStack.length === 0) return false;

            if(strEnum[strStack.pop()] !== str[i]) return false;
        }
    }

    return strStack.length === 0;
}

console.log(isValid('({})'))