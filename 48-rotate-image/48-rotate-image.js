/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {

    
    for(let rows = 0; rows < matrix.length; rows++){
        for(let cols = rows+1; cols < matrix[0].length; cols++){
            let temp = matrix[rows][cols];
            matrix[rows][cols] = matrix[cols][rows];
            matrix[cols][rows] = temp;
        }
    }    
    
    for(let rows of matrix){
        rows.reverse();
    }
    
    return matrix;
    
};