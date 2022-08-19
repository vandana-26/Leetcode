/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function(arr) {
    
   let tempMap = new Map();
    let temparr = []
    for(let i = 0; i< arr.length; i++){
        if(tempMap.has(arr[i])){
            tempMap.set(arr[i],tempMap.get(arr[i])+1)
        }
        else
            tempMap.set(arr[i],1);
    }
    
    tempMap.forEach((value,key) =>{
        temparr.push(value);
    })

    temparr.sort((a,b) => {
        return b-a
    })
    if(temparr.length == 1) return 1;
    let len = Math.floor(arr.length)/2;
    let count = 0;
    let sum = temparr.reduce((a,b) =>{
        return a+b;
    });
    
    console.log("aaaaa",sum);

    for(let i = 0;i < temparr.length; i++){
        if(sum-temparr[i] <= len){
            count++;
            return count;
        }
        else if(sum-temparr[i] > len){
            count++;
            sum = sum-temparr[i];
        }
        // else{
        //     continue;
        // }
            
    }
    
};