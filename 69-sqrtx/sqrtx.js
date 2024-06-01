/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x < 2) return x;
  let left = 2; let right = Math.floor(x/2);
  let a;
  while(left <= right){
    a = left + Math.floor((right-left)/2);
    if(a*a < x){
     left = a+1;
    }
    else if(a*a > x){
        right = a-1;
    }
    else return a
  }
  return right;  
};