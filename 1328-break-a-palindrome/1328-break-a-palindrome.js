/**
 * @param {string} palindrome
 * @return {string}
 */

var breakPalindrome = function(palindrome) {
    let newStr = "";
    let count = 0;
    if(palindrome.length <= 1)
        return ""
    
    let palindromeArr = palindrome.split('');
    
    for(let i = 0; i < Math.floor((palindromeArr.length)/2); i++){
        if(palindromeArr[i] != 'a'){
            palindromeArr[i] = 'a';
            return palindromeArr.join('');
        }
    }
    
  palindromeArr[palindromeArr.length - 1] = 'b';
    return palindromeArr.join('');
    
};
