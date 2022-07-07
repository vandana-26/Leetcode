/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
   var values = [1,4,5,9,10,40,50,90,100,400,500,900,1000];
    var symbols = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M'];
    var res = "";    
    let i = 0;
    
    while(num > 0){
        while(values[i] <= num){
            i++;
        }
        num = num - values[i-1];
        res = res + symbols[i-1];
        i = 0;
    }
   
    return res;
   
   
      
};