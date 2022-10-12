/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstringTwoDistinct = function(s) {
    
    let tempMap = new Map();
    
    let left = 0, right = 0;
    let maxLen = 2;
    
    if(s.length < 3)
        return s.length;
    
    while(right < s.length){
        
        tempMap.set(s[right], right);
        right++;
        if(tempMap.size == 3){
         let arr = Array.from(tempMap.values());
         let delIndex = Math.min(...arr);
          tempMap.delete(s[delIndex]);
            left = delIndex+1;
        }
        maxLen = Math.max(maxLen, right-left);
    }
    
    return maxLen;
    
};