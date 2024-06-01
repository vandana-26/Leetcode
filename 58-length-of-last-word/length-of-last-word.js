/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  s = s.trim();
 let count = 0;
 let i = s.length-1;
 let str = s.split(" ");
 return str[str.length-1].length;
};