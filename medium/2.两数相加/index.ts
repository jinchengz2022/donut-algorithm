function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 === null && l2 === null) return null;

  const dummyNode = new ListNode(0);
  let head = dummyNode, carry = 0;

  while (l1 !== null || l2 !== null) {
    const num1 = l1 !== null ? l1.val : 0;
    const num2 = l2 !== null ? l2.val : 0;
    const sum = num1 + num2 + carry;
    // 只能存一位数，则取余
    const value = sum % 10;
    // 进位数
    carry = Math.floor(sum / 10);
    const curNode = new ListNode(value);
    head.next = curNode;
    head = head.next;
    if (l1 !== null) {
      l1 = l1.next;
    }
    if (l2 !== null) {
      l2 = l2.next;
    }
  }

  // 进位还没存储完的情况下
  if (carry !== 0) {
    head.next = new ListNode(carry);
  }

  // while (l1 !== null && l2 !== null) {
  //   const sum = l1.val + l2.val + carry;
  //   // 只能存一位数，则取余
  //   const value = sum % 10;
  //   // 进位数
  //   carry = Math.floor(sum / 10);
  //   const curNode = new ListNode(value);
  //   head.next = curNode;
  //   head = head.next;
  //   l1 = l1.next;
  //   l2 = l2.next;
  // }

  // // l1,l2 长度不相等
  // const addNext = (list: ListNode | null) => {
  //   while (list !== null) {
  //     const sum = list.val + carry;
  //     const value = sum % 10;
  //     carry = Math.floor(sum / 10);
  //     const curNode = new ListNode(value);
  //     head.next = curNode;
  //     head = head.next;
  //     list = list.next;
  //   }
  // }
  // addNext(l1);
  // addNext(l2);

  // // 进位还没存储的情况下
  // if (carry !== 0) {
  //   const value = carry % 10;
  //   carry = Math.floor(carry / 10);
  //   const curNode = new ListNode(value);
  //   head.next = curNode;
  //   head = head.next;
  // }


  return dummyNode.next;
};

// 2023.01.03
// function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
//   if (l1 === null && l2 === null) return null;

//   const dummyNode = new ListNode(-1);
//   // 新增链表
//   let node = dummyNode;

//   let carry = 0;

//   while (l1 !== null || l2 !== null || carry !== 0) {
//       const num1 = l1 === null ? 0 : l1.val;
//       const num2 = l2 === null ? 0 : l2.val;
//       const sum = num1 + num2 + carry;
//       const value = sum % 10;
//       carry = Math.floor(sum / 10);

//       const valueNode = new ListNode(value);
//       node.next = valueNode;
//       // 记得指针移位
//       node = node.next;

//       if (l1 !== null) {
//           l1 = l1.next;

//       }
//       if (l2 !== null) {
//           l2 = l2.next;
//       }
//   }

//   return dummyNode.next;
// };