/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    
    let tempMap = new Map();
    for(let i = 0; i < strs.length; i++){
         let tempStr = strs[i].split('').sort().join('');
        if(!tempMap.has(tempStr)){
            tempMap.set(tempStr,[strs[i]])
        }
        else{
            let arr = tempMap.get(tempStr);
            arr.push(strs[i]);
            console.log(arr);
            tempMap.set(tempStr,arr);
        }
    }
    
    console.log(tempMap);
    return Array.from(tempMap.values());
    
};