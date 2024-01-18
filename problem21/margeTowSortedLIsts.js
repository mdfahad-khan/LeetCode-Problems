var mergeTwoLists = function(li,l2){
    let dummyHead = new ListNode(0);
    let currNode = dummyHead;
    while(li != null && l2 !=null){
        if(li.val <l2.val){
            currNode.next = l1;
            l1 = li.next;
        }
        else{
            currNode.next = l2;
            l2 = l2.next;
        }
        currNode = currNode.next;
    }
    if(l1 != null)
    {
        currNode.next = l1;
    }
    if(l2 != null)
    {
        currNode.next  = l2;
    }
    return dummyHead.next

}

