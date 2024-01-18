var isPalindrome = function(x) {
    let result = 0;
    let temp = x;
    while(temp !=0){
        rightmost = temp%10;
        result = result*10 + rightmost;
        temp = Math.floor(temp/10);
    }
    console.log(x);
    console.log(result);
    if(x == result){
        console.log("true");
    }
    else{
        console.log("false");
    }
};
isPalindrome(12121);