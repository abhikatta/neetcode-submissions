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
        
        let currentNode=head
        let prevNode=null
        while(currentNode){

            let nextNode=currentNode.next
            currentNode.next=prevNode
            prevNode=currentNode
            currentNode=nextNode

        }

        return prevNode
    }
}
