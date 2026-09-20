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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode {
        if (!list1 || !list2) return list1 ?? list2

        let curr: ListNode;
        if (list1.val < list2.val) {
            curr = list1
            list1 = list1.next
        }
        else {
            curr = list2
            list2 = list2.next
        }
        const head = curr

        while (true) {
            if (!list1 || !list2) {
                curr.next = (list1 ?? list2)
                break
            }
            if (list1.val < list2.val) {
                curr.next = list1
                list1 = list1.next
            }
            else {
                curr.next = list2
                list2 = list2.next
            }
            curr = curr.next

        }
        return head
    }
}
