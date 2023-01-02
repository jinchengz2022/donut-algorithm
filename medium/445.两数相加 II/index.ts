function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (l1 === null && l2 === null) return null;

  const stack1 = [];
  const stack2 = [];
  const node = new ListNode(-1)

  // 两链表倒置
  while (l1 !== null) {
    stack1.push(l1.val);
    l1 = l1.next;
  }
  while (l2 !== null) {
    stack2.push(l2.val);
    l2 = l2.next;
  }

  let carry = 0;

  while (stack1.length !== 0 || stack2.length !== 0 || carry !== 0) {
    const num1 = stack1.length === 0 ? 0 : stack1.pop();
    const num2 = stack2.length === 0 ? 0 : stack2.pop();
    const sum = num1 + num2 + carry;
    const value = sum % 10;
    carry = Math.floor(sum / 10);

    const curNode = new ListNode(value);
    const [j, k] = [node.next, curNode.next];
    node.next = k;
    curNode.next = j;
  }

  return node.next;
};