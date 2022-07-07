/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    
    let rev = 0;
    let rem;
    let num = Math.abs(x);
    while(num!= 0){
       rem = num % 10;
       num = Math.floor(num/10);
        
     rev = rev * 10 + rem;
    }
     let NegRev = 0-rev 
    if(x < 0  && NegRev > Math.pow(-2,31)){
        return NegRev;
    }
    else if(x > 0 && rev < (Math.pow(2,31)-1)){
        return rev;
    }
    else
        return 0;
     
};