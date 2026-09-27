/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    //finding the middle element
    let sp = fp = head;
    while (fp && fp.next) {
        sp = sp.next;
        fp = fp.next.next;
    }

    //reserve the second half of list
    let prev = null;
    let curr = sp;
    while (curr) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }

    //checking for palindrome
    let firstList = head;
    let secondList = prev;
    while (secondList) {
        if (firstList.val != secondList.val) {
            return false;
        }
        firstList = firstList.next;
        secondList = secondList.next;
    }
    return true;
};