/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
 let temp = new ListNode();
    temp.next = head;
    
    let front = temp, back = temp;
    
    for(let i = 0; i < n; i++){
        front = front.next;
    }
  //  console.log(back);
    while(front.next!=null){
        front = front.next;
        back = back.next;
    }
    back.next = back.next.next;
    
   // console.log(temp.next); 
    return temp.next;
};34