/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var mergeNodes = function (head) {
    let ans = new ListNode();
    let p = ans;
    let curr = head.next;
    let sum = 0;
    while (curr) {
        sum += curr.val;
        if (curr.val === 0) {
            let temp = new ListNode();
            temp.val = sum;
            p.next = temp;
            p = p.next;
            sum = 0;
        }
        curr = curr.next;
    }
    return ans.next;
};