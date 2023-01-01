function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (head === null) return null;

  const dummyNode = new ListNode(-1);
  dummyNode.next = head;
  // 从第n的前一位删除，slow从dummyNode头开始则慢一步
  let fast = head, slow = dummyNode;

  // 移动到n的步距
  for (let i = 0; i < n; i++) {
      fast = fast.next;
  }

  // 当fast到达尾部时slow到达n节点的前一个
  while (fast !== null) {
      fast = fast.next;
      slow = slow.next;
  }

  slow.next = slow.next.next;

  return dummyNode.next;
};