/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    for(let i = 0; i < matrix.length; i++){
       let j = matrix[i].length - 1;
          if(target == matrix[i][j])
            return true;
          else if(target < matrix[i][j] && target >= matrix[i][0]){
            let start = 0, end = j
            while(start < end){
                //console.log(start);console.log(end);
                console.log(matrix[i][start])
            if(target == matrix[i][start] || target == matrix[i][end]){
                  console.log("aa");
               return true;
              }
             else if(target > matrix[i][start]){
                  console.log("assas");
                start++;
              }
              else if(target < matrix[i][end]){
                console.log("addsadsad");
               end--;
              }

            }
          }
    }
    return false;
};