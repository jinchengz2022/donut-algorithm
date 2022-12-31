function hasCycle(head: ListNode | null): boolean {
  if(head === null || head.next === null) return false;

  let slow = head, fast = head;

  while(fast !== null && fast.next !== null) {
      fast = fast.next.next;
      slow = slow.next;

      if(slow === fast) return true;
  }

  return false;
};