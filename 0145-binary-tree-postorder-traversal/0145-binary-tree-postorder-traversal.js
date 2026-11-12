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
var postorderTraversal = function (root) {
    let ans = [];

    function preorder(curr) {
        //  left -> right -> root
        if (!curr) return;
        
        preorder(curr.left);
        preorder(curr.right);
        ans.push(curr.val);
    }
    preorder(root);
    return ans;
};