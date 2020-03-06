/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
function ListNode(val) {
  this.val = val
  this.next = null
}
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  // 1->2->2->1
  // 1->2->1
  // 1->2->3->2->1(->null)
  if (head === null || head.next === null) return true
  let node = head
  let len = 0
  while (node) {
    len++
    node = node.next
  }

  node = head
  let prev = null,
    next
  for (let i = 1; i <= len; i++) {
    if (i <= len / 2) {
      // 前半段链表翻转
      next = node.next
      node.next = prev
      prev = node
      node = next
    } else if (len % 2 !== 0 && i === Math.floor(len / 2) + 1) {
      node = node.next
    } else {
      // 后半段链表对比反转后的前半段链表
      if (prev.val !== node.val) return false
      node = node.next
      prev = prev.next
    }
  }
  return true
}

let n1 = new ListNode(null)
// let n2 = new ListNode(1)
// let n3 = new ListNode(2)
// let n4 = new ListNode(1)
// let n5 = new ListNode(1)

// n1.next = n2
// n2.next = n3
// n3.next = n4
// n4.next = n5

console.log(isPalindrome(n1))
