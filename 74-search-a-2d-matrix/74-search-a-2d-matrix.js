/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
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