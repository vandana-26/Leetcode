/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
    
    if(mat.length == 0 || r*c != mat.length*mat[0].length){
        return mat;
    }
    let output = [],res;
    res = new Array(r).fill(0).map(() =>new Array(c).fill(0))
    let R = mat.length;
    let C = mat[0].length;
    for(let i = 0; i < R; i++){
        for(let j = 0; j < C; j++){
           output.push(mat[i][j]); 
        }
    }
    
    for(let i = r-1; i>= 0; i--){
        for(let j = c-1; j >= 0; j--){
            res[i][j] =  output.pop();
        }
    }

    return res;
};