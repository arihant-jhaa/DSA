/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let sentinel = new ListNode();
    sentinel.next = head;
    let prev = sentinel;
    let length = 0;
    while (head) {
        head = head.next;
        length++;
    }
    let prevpos = length - n;
    for (let i = 0; i < prevpos; i++) {
        prev = prev.next;
    }
    prev.next = prev.next.next;
    return sentinel.next;
};