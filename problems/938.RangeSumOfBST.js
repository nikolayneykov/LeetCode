/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
let rangeSumBST = function (root, L, R) {
  let sum = 0
  traverse(root, L, R)
  return sum

  function traverse (node, L, R) {
    if (node == null) {
      return 0
    }

    if (node.val >= L && node.val <= R) {
      sum += node.val
    }

    traverse(node.left, L, R)
    traverse(node.right, L, R)
  }
}
