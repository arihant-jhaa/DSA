/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head || !head.next) return head;

    let length = 0;
    let curr = head;

    while (curr) {
        length++;
        curr = curr.next;
    }
    k = k % length;

    let sp = fp = head;
    for (let i = 0; i < k; i++) {
        fp = fp.next;
    }
    while (fp.next) {
        sp = sp.next;
        fp = fp.next;
    }
    fp.next = head;
    let newHead = sp.next;

    sp.next = null;
    return newHead;
};