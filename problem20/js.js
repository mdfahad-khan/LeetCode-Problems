var isValid = function(s) {
    let stack = [];
    for(let i=0;i<s.length;i++){
        let top = stack[stack.lenght -1];
        if(s[i]=='(' ||s[i]=='{' || s[i]=='[' ){
            stack.push(s[i])
        }
        else if(s[i] == ')' && top == '(' || s[i] == '}' && top == '{' || s[i] == ']' && top =='[' ){
            stack.pop();
        }
        else{
             return false
        }
       
    }
    if(stack.length == 0){
        return true;
    }
    if(stack.length !=0){
        return false;
            }
};