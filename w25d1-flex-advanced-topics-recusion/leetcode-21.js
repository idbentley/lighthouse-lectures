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
    let head;
    let rest;
    if (list1 == null)
        return list2;
    if (list2 == null)
        return list1;
    if (list1.val <= list2.val) {
        head = list1;
        rest = mergeTwoLists(list1.next, list2);
    } else {
        head = list2;
        rest = mergeTwoLists(list1, list2.next);
    }
    head.next = rest;
    return head;
};