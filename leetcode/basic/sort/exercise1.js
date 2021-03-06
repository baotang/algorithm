/* 
合并两个有序数组

给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。
说明:
初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
示例:
    输入:
    nums1 = [1,2,3,0,0,0], m = 3
    nums2 = [2,5,6],       n = 3
    输出: [1,2,2,3,5,6]
*/


/**
 * 思路: 可以理解为插入排序
 * 
 * 当nums1中出现首个大于nums2中的元素时, 将nums2的元素插入到当前指针的位置
 * 
 */

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    // 定义nums1和nums2的初始指针位置
    const insert = (index, value)=>{
        for(let end = nums1.length - 1; end > index; end--){
            nums1[end] = nums1[end-1]
        }
        nums1[index] = value
    }
    for(let i = 0,j = 0;j<n;){
       if(i>=m){
            nums1[i] = nums2[j];
            i++;
            j++;
            m++;
        }else if(nums1[i] > nums2[j]){
            insert(i, nums2[j])
            i++;
            j++;
            m++;
        }else{
            i++
        }
    }
};


const test = ()=>{
    var nums1 = [1,2,3,0,0,0];
    var nums2 = [2,5,6];
    merge(nums1,3,nums2,3)
    console.log(nums1)
}

test()