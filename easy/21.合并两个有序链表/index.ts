function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (!list1 && !list2) return null;

  const dummyNode = new ListNode(-1);
  let head = dummyNode;

  while (list1 !== null && list2 !== null) {
      if (list1.val > list2.val) {
          head.next = list2;
          list2 = list2.next;
      } else {
          head.next = list1;
          list1 = list1.next;
      }
      head = head.next;
  }

  if (list1 !== null) {
      head.next = list1;
  } else {
      head.next = list2;
  }

  return dummyNode.next;
};