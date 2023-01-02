const getMiddleNode = (head: ListNode): ListNode => {
  let fast = head, slow = head;

  while (fast.next !== null && fast.next.next !== null) {
    fast = fast.next.next;
    slow = slow.next;
  }

  return fast.next !== null ? slow.next : slow;
}

const getReverseNode = (head: ListNode): ListNode => {
  let node: ListNode = null;

  while (head !== null) {
    const temp = head.next;
    head.next = node;
    node = head;
    head = temp;
  }

  return node;
}

function isPalindrome(head: ListNode | null): boolean {

  const middleNode = getMiddleNode(head);
  let reverseNode = getReverseNode(middleNode);
  middleNode.next = null;

  while (head !== null && reverseNode !== null) {
    if (head.val !== reverseNode.val) {
      return false;
    }
    head = head.next;
    reverseNode = reverseNode.next;
  }

  return true;
};