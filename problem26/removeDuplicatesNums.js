var removeDuplicates = function(nums){
    for(let i = 0;i<nums.length;i++)
    {
        for(let j=nums.length;j>=i+1;j--)
        {   if(nums[i] == nums[j]){
            nums.splice(i,1);
        }
       
        }
    }
}
console.log(removeDuplicates(1,23,2,1))
