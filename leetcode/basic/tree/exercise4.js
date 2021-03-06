/**
 * 二叉树的层次遍历
 * 
 * 给定一个二叉树，返回其按层次遍历的节点值。 （即逐层地，从左到右访问所有节点）。
 * 
 *  例如:
    给定二叉树: [3,9,20,null,null,15,7],
 *  3
   / \
  9  20
    /  \
   15   7
返回其层次遍历结果：

[
  [3],
  [9,20],
  [15,7]
]
 */

 /**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const arr = []
    const recursion = (list) => {
        const layerNode = [];
        const layerVal = [];
        list.forEach(node=>{
            if(!node)return;
            layerVal.push(node.val)
            node.left && layerNode.push(node.left);
            node.right && layerNode.push(node.right);
        });
        if(layerVal.length){
            arr.push(layerVal)
        }
        if(layerNode.length){
            recursion(layerNode)
        }
    }
    recursion([root])
    return arr;
};