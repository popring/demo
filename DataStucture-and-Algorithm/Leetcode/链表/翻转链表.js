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
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
  // 输入: 1->2->3->4->5->NULL
  // prev 2->1->null
  // 输出: 5->4->3->2->1->NULL

  // 输入: 1->2->NULL
  // 输出: 2->1->NULL
  if (head === null || head.next === null) return head
  let node = head
  let prev = null,
    next
  while (node) {
    next = node.next
    node.next = prev
    prev = node
    node = next
  }
  return prev
}

let n1 = new ListNode(1)
let n2 = new ListNode(2)
let n3 = new ListNode(3)
let n4 = new ListNode(4)
let n5 = new ListNode(5)

n1.next = n2
n2.next = n3
n3.next = n4
n4.next = n5

const a = reverseList(n1)
console.log(a)
