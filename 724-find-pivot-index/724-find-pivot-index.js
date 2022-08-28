/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    
    let sum = 0,left = 0;
    for(let i = 0; i < nums.length; i++){
        sum = sum + nums[i];
    }
    
    for(let i = 0; i < nums.length; i++){
        if(left == sum - (left+nums[i]))
            return i;
        else
            left = left + nums[i];
    }
    return -1;
};