/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    
    let outputStr = '';
    let currRow = 0;
    let j = 0;
    if(numRows == 1) return s;
    let cycleLength = 2 * numRows - 2;
    
    while(currRow < numRows){
         j = 0;
        while(j + currRow < s.length){
            outputStr = outputStr + s[j+currRow];
     //       console.log(outputStr);
            if(currRow != 0 && currRow != numRows - 1 && j+cycleLength - currRow < s.length){
                outputStr = outputStr + s[j + cycleLength -currRow];
            }
            
             j = j + cycleLength;
        }
      currRow++;
    } 
    
    return outputStr;
};