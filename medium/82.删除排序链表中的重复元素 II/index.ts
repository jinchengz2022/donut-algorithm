function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) return null;

  const dummyNode = new ListNode(-1);
  dummyNode.next = head;
  head = dummyNode;

  // 注意边界
  while (head !== null && head.next !== null && head.next.next !== null) {
      if (head.next.val === head.next.next.val) {
          // 记录重复值
          const curValue = head.next.val;
          // 循环到找到不重复值的位置
          while (head.next !== null && head.next.val === curValue) {
              head.next = head.next.next;
          }
      } else {
          head = head.next;
      }
  }

  return dummyNode.next;
};