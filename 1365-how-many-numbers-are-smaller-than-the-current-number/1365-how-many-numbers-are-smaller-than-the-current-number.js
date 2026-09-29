/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let count = 0;
    let ans = [];
    for(let i = 0;i<nums.length;i++){
        for(let j = 0;j<nums.length;j++){
            if(nums[i]>nums[j])
                count++;
        }
        ans[i]=count;
        count = 0;
    }
    return ans;
};