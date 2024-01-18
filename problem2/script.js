var addTwoNumbers = function(l1, l2) {
    let carry =0;
    let resutl = new ListNode(-1);
    let dummy =resutl;
    while(l1 || l2 || carry){
        let l1Val = l1 ? l1.val :0;
        let l2Val = l2 ? l2.val :0;
        let nextDigit = (l1Val + l2Val +carry)%10;
        resutl.next = new ListNode(nextDigit);
        resutl = resutl.next;
        carry = Math.floor((l1Val + l2Val +carry)/10);
        l1 = l1? l1.next :null;
        l2 = l1? l2.next :null;
    }
    return dummy.next
};