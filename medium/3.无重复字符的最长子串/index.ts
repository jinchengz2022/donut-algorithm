// 2022.12.25
function lengthOfLongestSubstring(s: string): number {
  if(!s || s.length === 0) return 0;

  let i = 0, maxStringLength = 0;

  while(i < s.length) {
      const stack: string[] = [];
      let j = i;
      while(!stack.includes(s[j]) && j < s.length) {
          stack.push(s[j]);
          j++;
      }
      maxStringLength = Math.max(maxStringLength, stack.length);
      i++;
  }

  return maxStringLength;
};