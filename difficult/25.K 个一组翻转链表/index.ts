function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  if(head === null) return null;

  const dummyNode = new ListNode(-1);
  dummyNode.next = head;

  let node = dummyNode;

  // 1. 判断够不够长度k个(不够直接return)
  // 2. 翻转（循环次数为k - 1次）
  // 3. 翻转完后node指向翻转后的尾节点

  while(node.next !== null) {
      let checkLength = node;
      let curNode = node.next;

      for(let i = 0; i < k; i++) {
          if(checkLength.next === null) {
              return dummyNode.next;
          }
          checkLength = checkLength.next;
      }

      for(let j = 0; j < k - 1; j++) {
          let temp = curNode.next;
          curNode.next = temp.next;
          temp.next = node.next;
          node.next = temp;
      }

      node = curNode;
  }

  return dummyNode.next;
};

// 2023.01.03
//  function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
//     if(head === null) return null;

//     const dummyNode = new ListNode(-1);
//     dummyNode.next = head;
//     let node = dummyNode;

//     // 循环中判断剩余元素是否够翻转
//     // 翻转链表
//     while(node !== null) {
//         let curNode = node.next;
//         let boundyNode = node;
//         for(let i = 0; i < k; i++) {
//             if(boundyNode.next === null) {
//                 return dummyNode.next;
//             }
//             boundyNode = boundyNode.next;
//         }

//         // 注意k翻转次数
//         for(let j = 0; j < k - 1; j++) {
//             const temp = curNode.next;
//             curNode.next = temp.next;
//             temp.next = node.next;
//             node.next = temp;
//         }

//         // 下一个指针指向翻转的第一个节点
//         node = curNode;
//     }

//     return dummyNode.next;
// };