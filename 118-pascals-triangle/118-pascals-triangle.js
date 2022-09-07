/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    
    let output = []
    output.push([1]);
    for(let i = 1; i < numRows; i++){
        let rowres = [];
        let prevrowres = output[i-1];
         rowres.push(1);
        for(let j = 1; j<i; j++){
            let sum = prevrowres[j-1] + prevrowres[j];
            rowres.push(sum);
        }
        rowres.push(1);
        output.push(rowres);
    }
    
    return output;
    
};