var deleteDuplicates = function(head) {
    if(!head){
        return null; 
    }
     let temp = new ListNode(-Infinity, head);
     let  prev =temp;
     let cur = head;
     let next = cur.next;
     while(cur){
         if( cur && next && cur.val === next.val){
             while(next && cur.val === next.val){
                 next = next.next;
             }
             prev.next= next
             cur = next
             next = next?next.next:null;
         }else{
             prev = cur
             cur= next
             next = next? next.next:null;
         }
     }
     return temp.next;
};