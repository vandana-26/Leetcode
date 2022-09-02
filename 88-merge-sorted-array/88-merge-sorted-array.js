/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    
    let first = 0, second = 0,i =0;
    let tempnum = [];
    for(let i = 0; i < m; i++){
        tempnum.push(nums1[i]);
    }
    
    while(i < m+n){
        if(second>= n || (first < m && tempnum[first] <= nums2[second])){
            nums1[i] = tempnum[first];
            first++;
        }
        else{
            nums1[i] = nums2[second];
            second++;
        }
        i++;
    }
    
    return nums1;
    
};