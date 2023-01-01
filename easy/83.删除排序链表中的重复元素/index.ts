function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (head === null) return null;

  let node = head;

  // 注意边界
  while (node !== null && node.next !== null) {
      if (node.val === node.next.val) {
          // 相等则指向下一个的下一个
          node.next = node.next.next;
      } else {
          node = node.next;
      }
  }

  return head;
};