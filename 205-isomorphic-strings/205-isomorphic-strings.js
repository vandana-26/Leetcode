/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    
    let str1 = buildString(s);
    let str2 = buildString(t);
    console.log(str1);console.log(str2);
    
    if(str1 == str2)
        return true
    else
        return false

};


var buildString = function(str){
     let tempStr = "";
    let tempMap = new Map();
    
    for(let i = 0; i < str.length; i++){
       if(!tempMap.has(str[i])){
           tempMap.set(str[i],i)
       }
        else{
            tempMap.set(str[i],tempMap.get(str[i]));
        }
        
        tempStr = tempStr+tempMap.get(str[i])+" ";
        
    }
    return tempStr;
}