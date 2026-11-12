/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
    let ans = [];

    function preorder(curr) {
        // root -> left -> right
        if (!curr) return;
        ans.push(curr.val);
        preorder(curr.left);
        preorder(curr.right);
    }
    preorder(root);
    return ans;
};