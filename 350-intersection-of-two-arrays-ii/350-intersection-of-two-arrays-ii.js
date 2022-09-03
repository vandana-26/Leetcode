/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
        let tempMap = new Map();
    let arr = [];
    
    for(let i = 0; i < nums1.length; i++){
        if(!tempMap.has(nums1[i]))
            tempMap.set(nums1[i],1);
        else
            tempMap.set(nums1[i], tempMap.get(nums1[i])+1)
    }
    
    for(let i = 0; i < nums2.length; i++){
        if(tempMap.has(nums2[i]) && tempMap.get(nums2[i]) > 0){
          arr.push(nums2[i]);
            tempMap.set(nums2[i],tempMap.get(nums2[i])-1);
        }  
    }
    return arr;
};
