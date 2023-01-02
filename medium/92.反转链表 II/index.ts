function reverseBetween(head: ListNode | null, left: number, right: number): ListNode | null {
  if (head === null) return null;

  const dummyNode = new ListNode(-1);
  dummyNode.next = head;

  let node = dummyNode;

  // 注意边界，left - 1
  for (let i = 0; i < left - 1; i++) {
      node = node.next;
  }

  // 记录反转前的节点
  const curNode = node.next;

  for (let j = left; j < right; j++) {
      const temp = curNode.next;
      curNode.next = temp.next;
      temp.next = node.next;
      node.next = temp;
  }

  return dummyNode.next;
};