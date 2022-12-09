/*
Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:
Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

Example 2:
Input: head = [1,2]
Output: [2,1]

Example 3:
Input: head = []
Output: []
 

Constraints:
* The number of nodes in the list is the range [0, 5000].
* -5000 <= Node.val <= 5000

*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    if(head == null) { return head; }

    let curr = head;
    let holdPrev = null;

    while(curr) {
        let holdNext = curr.next; // hold the next node, so we don't lose it when we break the link between it & current node
        curr.next = holdPrev; // reverses the order of the nodes (2 will point at 1, 3 will point at 2, etc.)
        holdPrev = curr; 
        curr = holdNext; // move on to the next node
    }
    
    return holdPrev;
};