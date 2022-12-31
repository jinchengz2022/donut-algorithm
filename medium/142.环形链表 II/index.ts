function detectCycle(head: ListNode | null): ListNode | null {
  if(head === null || head.next === null) return null;

  let slow = head, fast = head;

  while(fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;

      if(slow === fast) {
          let cur = head;
          while(cur !== slow) {
              cur = cur.next;
              slow = slow.next;
          }

          return cur;
      }
  }

  return null;
};