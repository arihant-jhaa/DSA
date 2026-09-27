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
    let seeNode = new Set(), curr = head;
    while (curr) {
        if (seeNode.has(curr)) return true;
        seeNode.add(curr);
        curr = curr.next;
    }
    return false;

};