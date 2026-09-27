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
var hasCycle = function (head) {
    // let seeNode = new Set(), curr = head;
    // while (curr) {
    //     if (seeNode.has(curr)) return true;
    //     seeNode.add(curr);
    //     curr = curr.next;
    // }
    // return false;

    if (!head) return false;
    let fp = head.next, sp = head;
    while (sp != fp) {
        if (fp === null || fp.next === null) return false;
        fp = fp.next.next;
        sp = sp.next;
    }
    return true;

};