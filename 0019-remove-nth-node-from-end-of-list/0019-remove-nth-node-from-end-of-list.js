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
    // Two Pass Solution----------------------------------------------

    // let sentinel = new ListNode();
    // sentinel.next = head;
    // let prev = sentinel;
    // let length = 0;
    // while (head) {
    //     head = head.next;
    //     length++;
    // }
    // let prevpos = length - n;
    // for (let i = 0; i < prevpos; i++) {
    //     prev = prev.next;
    // }
    // prev.next = prev.next.next;
    // return sentinel.next;

    // One Pass Solution----------------------------------------------

    let sentinel = new ListNode();
    sentinel.next = head;
    let sp = fp = sentinel;
    for (let i = 0; i < n; i++)fp = fp.next;
    while (fp.next) {
        fp = fp.next;
        sp = sp.next;
    }

    sp.next = sp.next.next;
    return sentinel.next;
};