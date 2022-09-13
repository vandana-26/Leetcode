/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

/* First Method
var searchMatrix = function(matrix, target) {
    for(let i = 0; i < matrix.length; i++){
       let j = matrix[i].length - 1;
          if(target == matrix[i][j] || target == matrix[i][0])
            return true;
          else if(target < matrix[i][j] && target > matrix[i][0]){
            let start = 0, end = j
            while(start < end){
            if(target == matrix[i][start] || target == matrix[i][end]){
               return true;
              }
             else if(target > matrix[i][start]){
                start++;
              }
              else if(target < matrix[i][end]){
               end--;
              }

            }
          }
    }
    return false;
};
*/

//Second method using Binary Search
var searchMatrix = function(matrix, target) {
 let rows = matrix.length;
 let cols = matrix[0].length;
    
    if(rows == 0)
        return false;
    
    let left = 0, right = rows*cols -1;
     let midIndex, midEle;
    while(left <= right){
        midIndex = Math.floor((left+right)/2);
        midEle = matrix[Math.floor(midIndex/cols)][midIndex%cols];
        
        if(midEle == target)
            return true;
        
        else if(midEle > target)
            right = midIndex- 1;
        else
            left = midIndex + 1
        
    }
    return false;
};