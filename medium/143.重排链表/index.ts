export const getMiddleNode = (head: ListNode): ListNode => {
  let fast = head, slow = head;

  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return fast.next !== null ? slow.next : slow;
}

export const reverseList = (head: ListNode): ListNode => {
  let node = null;

  while (head !== null) {
    const temp = head.next;
    head.next = node;
    node = head;
    head = temp;
  }

  return node;
}

export const mergeList = (head: ListNode, reverseNode: ListNode): void => {
  const dummyNode = new ListNode(-1);
  let node = dummyNode,
    index = 0;

  while (head !== null && reverseNode !== null) {
    // 奇数则指向head链表偶数则指向翻转链表
    if (index % 2 === 0) {
      node.next = head;
      head = head.next;
    } else {
      node.next = reverseNode;
      reverseNode = reverseNode.next;
    }
    node = node.next;
    index++;
  }

  if (head !== null) {
    node.next = head;
  }
  if (reverseNode !== null) {
    node.next = reverseNode;
  }
}

export function reorderList(head: ListNode | null): void {
  if (head === null) return null;

  // 1.获取链表中点（快慢指针）
  // 2.翻转链表（从中间节点开始翻转）
  // 3.合并两个链表

  const middleNode = getMiddleNode(head);
  let reverseNode = reverseList(middleNode.next);

  // 断开链表
  middleNode.next = null;

  mergeList(head, reverseNode)

};