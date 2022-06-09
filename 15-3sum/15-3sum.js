/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {

    nums.sort((a,b) => a-b);
    let tempMap = new Map();
    let res = [];
   // let finalarr = [];
    console.log(nums);
    
  for(let i = 0; i < nums.length; i++){
      if(nums[i] > 0)
          break;
      
      else if(i==0 || nums[i] != nums[i-1]){
          twoSum(nums,i,res)
      }
  }
    return res;
};

var twoSum = function(nums, i, res){
    let tempSet = new Set();

    for(let j = i+1; j < nums.length; j++){
        let third = -nums[i]-nums[j]
        if(tempSet.has(-nums[i]-nums[j])){
                let arr = [];
            arr.push(nums[i], nums[j],third);
            res.push(arr);

        while(j+1 < nums.length && nums[j] == nums[j+1])
            j++;
        }
        tempSet.add(nums[j]);
                  
    }
}