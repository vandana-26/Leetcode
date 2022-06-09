/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    
  let tempMap = new Map();
    let start = 0, end = 0;
    let maxLen = 0;
    
    while(end < s.length){
        if(!tempMap.has(s[end])){
            tempMap.set(s[end],1);
            end++;
            maxLen = Math.max(maxLen, tempMap.size);
        }
        else{
            tempMap.delete(s[start]);
            start++;
        }
    }
    
    return maxLen;
    
};