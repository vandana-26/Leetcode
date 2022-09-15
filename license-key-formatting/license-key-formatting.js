/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    
    let split = s.split('');
     let finalStr = ""
     let counter = 0;
     let addStr = false;
    for(let i = split.length-1; i>=0; i--){
        if(split[i] != '-'){
            if(addStr == false)
            finalStr = split[i] + finalStr;
            else
                finalStr = split[i] + '-' +finalStr;
            counter++;
             addStr = false;
            if(counter % k == 0)
                addStr = true;
            
        }
    }
    
    return finalStr.toUpperCase();
};