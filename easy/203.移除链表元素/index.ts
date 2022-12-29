
 function removeElements(head: ListNode | null, val: number): ListNode | null {

  let curNode = new ListNode(0);
  curNode.next = head;
  let dummyNode = curNode;

  while(dummyNode.next) {
      if(dummyNode.next.val === val) {
          dummyNode.next = dummyNode.next.next;
      } else {
          dummyNode = dummyNode.next;
      }
  }

  return curNode.next;
};