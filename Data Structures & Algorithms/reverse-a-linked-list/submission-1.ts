/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

 
class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
                
        if(!head||!head.next){
            return head
        }
        
        
        let prevNode=null
        while(head){

            let nextNode=head.next
            head.next=prevNode
            prevNode=head
            head=nextNode

        }

        return prevNode
    }
}
