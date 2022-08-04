/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let resList = new ListNode();
    let head = resList;
    
    while(list1 != null && list2 != null){
        if(list1.val < list2.val){
            resList.next = new ListNode(list1.val);
            list1 = list1.next;
        }
        else{
            resList.next = new ListNode(list2.val);
            list2 = list2.next;
        }
        resList = resList.next;
    }
    if(list1 != null)
        resList.next = list1;
        if(list2 != null)
        resList.next = list2;
   
    console.log("aa",head.next);
    return head.next;
    
};