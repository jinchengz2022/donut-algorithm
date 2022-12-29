function middleNode(head: ListNode | null): ListNode | null {
  let fast = head;
  let slow = head;

  // 奇数情况下fast到终点时slow刚好是fast的一半
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  // 偶数情况下会剩余一个
  if (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;

  // let length = 0;
  // let node = head;
  // while(node.next) {
  //     length++;
  //     node = node.next;
  // }

  // let middle = Math.ceil(length / 2), curNode = head;

  // while(middle-- > 0) {
  //     curNode = curNode.next;
  // }

  // return curNode
};