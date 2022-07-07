/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  
    let maxA = 0;
    
    let i = 0, j = height.length -1;
    
    while(i < j){
        let width = j-i;
        maxA = Math.max(maxA, Math.min(height[i],height[j]) * width);
        
        if(height[i] <= height[j]){
            i++;
        }
        else
            j--;
    }
    
    return maxA;
    
};