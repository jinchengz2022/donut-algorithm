// 2022.12.25
function reverse(x: number): number {
  const transformAry = x.toString().split('');
  let result = '';

  if(transformAry[0] === '-') {
      result = '-';
      transformAry.shift();
  }

  while (transformAry[transformAry.length - 1] === '0') {
      transformAry.pop();
  }

  while(transformAry.length > 0) {
      result = result + transformAry.pop();
  }

  return (Number(result) > Math.pow(2, 31) || Number(result) < Math.pow(-2, 31)) ? 0 : Number(result);
};