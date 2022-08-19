/**
 * @param {string} palindrome
 * @return {string}
 */

String.prototype.replaceAt = function(index,replaceStr){
    return this.substring(0,index) + replaceStr + this.substring(index+replaceStr.length);
}

var breakPalindrome = function(palindrome) {
    let newStr = "";
    let count = 0;
    if(palindrome.length <= 1)
        return ""
    
//     for(let i = 0; i < (palindrome.length)/2; i++){
//         if(palindrome[i] == 'a')
//             count++;
//         else{
//             newStr = palindrome.replaceAt(i,'a');
//             return newStr;
//         }
//     }
    
//     if(count === (palindrome.length)/2)
//        newStr = palindrome.replaceAt(palindrome.length-1,'b'); 
//     return newStr;
    
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
