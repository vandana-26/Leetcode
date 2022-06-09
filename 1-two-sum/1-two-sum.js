/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    
    let tempMap = new Map();
    let arr = [];
    
    for(let i = 0; i < nums.length; i++){
        let ele = target - nums[i];
        
        if(tempMap.has(ele)){
            arr.push(tempMap.get(ele),i);
            break;
        }
        tempMap.set(nums[i],i)
    }
    
    return arr;
};


