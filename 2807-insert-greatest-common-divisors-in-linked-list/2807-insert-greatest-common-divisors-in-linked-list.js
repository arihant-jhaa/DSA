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
function gcd(a, b) {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}

var insertGreatestCommonDivisors = function (head) {
    if (!head || !head.next) return head;
    let start = sp = head;
    let fp = head.next;

    while (fp) {
        let val = gcd(sp.val, fp.val);
        const res = new ListNode(val);
        sp.next = res;
        res.next = fp;
        sp = fp;
        fp = fp.next;
    }
    return start;
};