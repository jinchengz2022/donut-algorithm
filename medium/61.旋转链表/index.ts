function getLength(head) {
  let length = 0;
  while (head !== null) {
    length++;
    head = head.next;
  }

  return length;
}

function rotateRight(head: ListNode | null, k: number): ListNode | null {
 // 1.判断边界
 // 2.快慢指针
 // 3.变更快慢指针指向
 if (head === null) return null;

 const dummyNode = new ListNode(-1);
 dummyNode.next = head;
 let node = dummyNode, fast = node, slow = node;

 k = k % getLength(head);

 for(let i = 0; i < k; i++) {
     fast = fast.next;
 }
 while(fast !== null && fast.next !== null) {
     slow = slow.next;
     fast = fast.next;
 }

// 5 -> [1,2,3...]
// dummyNode head -> 4
// slow 没有断开是个环，所以得断开连接
 fast.next = dummyNode.next;
 dummyNode.next = slow.next
 slow.next = null;

 return dummyNode.next;
};