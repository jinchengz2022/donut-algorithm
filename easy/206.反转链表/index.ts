function reverseList(head: ListNode | null): ListNode | null {
  if (head === null) return null;

  let pre = null;

  while (head !== null) {
      // 保存下一个指针位置
      const temp = head.next;
      // 指向上一个保存值
      head.next = pre;
      // 当前值给pre
      pre = head;
      head = temp;
  }

  return pre;
};