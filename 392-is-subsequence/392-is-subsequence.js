/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function(s, t) {
    
    if(s.length > t.length)
        return false;
    
   let i = 0, j = 0;
    let flag = 0;
    while(i >= j && j < s.length && i < t.length){
        if(t[i] == s[j]){
            i++;
            j++;
        }
        else{
            i++;
        }
        flag = j;
    }
    
    if(flag == s.length)
        return true;
    else
        return false;
    
};