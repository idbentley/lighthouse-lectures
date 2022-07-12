/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function(l1, l2) {
    return addTwoNumbersRecurse(l1, l2, false);
};
var addTwoNumbersRecurse = function(l1, l2, carryOver) {
    // If both lists are done, return the carryover node if necessary.
    if (l1 ===  null && l2 === null) {
        if (carryOver) {
            return new ListNode(1);
        } else {
            return null;
        }
    } else {
        let listNode;
        let rest;
        // If l1 doesn't exist, create an identity node.
        if (l1 === null) {
            l1 = new ListNode(0)
        }
        // If l2 doesn't exist, create an identity node.
        if (l2 === null) {
            l2 = new ListNode(0)
        }
        listNode = new ListNode(l1.val + l2.val);
        if (carryOver) {
            listNode.val += 1 ;
        }
        if (listNode.val > 9) {
            listNode.val -= 10;
            rest = addTwoNumbersRecurse(l1.next, l2.next, true);
        } else {
            rest = addTwoNumbersRecurse(l1.next, l2.next, false);
        }
        listNode.next = rest;
        return listNode;
    }
} 