/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

//FIrst Way to solve
// var intersect = function(nums1, nums2) {
//         let tempMap = new Map();
//     let arr = [];
    
//     for(let i = 0; i < nums1.length; i++){
//         if(!tempMap.has(nums1[i]))
//             tempMap.set(nums1[i],1);
//         else
//             tempMap.set(nums1[i], tempMap.get(nums1[i])+1)
//     }
    
//     for(let i = 0; i < nums2.length; i++){
//         if(tempMap.has(nums2[i]) && tempMap.get(nums2[i]) > 0){
//           arr.push(nums2[i]);
//             tempMap.set(nums2[i],tempMap.get(nums2[i])-1);
//         }  
//     }
//     return arr;
// };


//Second APproach

var intersect = function(nums1, nums2) {
    
    let i = 0, j = 0, k=0;
    
    nums1.sort((a,b) =>{
        return a-b;
    })
    
    nums2.sort((a,b) =>{
        return a-b;
    })
    
    while(i < nums1.length && j < nums2.length){
        if(nums1[i] < nums2[j]){
            i++;
        }
        else if(nums1[i] > nums2[j])
            j++;
        else{
            nums1[k] = nums1[i];
            i++;
            j++;
            k++;
        }
    }
    
    return nums1.slice(0,k);
}
