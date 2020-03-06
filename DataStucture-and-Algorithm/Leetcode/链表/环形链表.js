/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  let node = head
  while (node) {
    if (node.next === node) return true
    if (node.next !== null) node.next = node.next.next
    node = node.next
  }
  return false
}
