function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
  if (!head) return null;

  // k值即为区间个数，fast和slow之间即表示这个区间
  let fast = head, slow = head, index = k - 1;

  while (index-- > 0) {
    fast = fast.next;
  }

  while (fast.next && fast) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
  // let length = 0;
  // let fakeNode = head;

  // while(fakeNode) {
  //     length++;
  //     fakeNode = fakeNode.next;
  // }

  // let dummyNode = head, num = length - k;
  // while(num !== 0) {
  //     dummyNode = dummyNode.next;
  //     num--;
  // }

  // return dummyNode;
};