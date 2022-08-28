/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let temp = new Map();
    
    for(let i = 0; i < nums.length; i++){
        if(temp.has(nums[i]))
            return true;
        else
            temp.set(nums[i],1);
    }
    return false;
};