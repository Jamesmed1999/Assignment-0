function sumOfMinimumAndMaximum(nums) {
  let max =0;
  let min = 0;
  let temp = nums[0];

  for(let i = 0;i<nums.length;i++)
  {
    if(nums[i] > temp)
    {
      temp = nums[i];
    }
  }
  max = temp;
  temp = nums[0];

  for(let j = 0;j<nums.length;j++)
  {
    if(nums[j] < temp)
    {
      temp = nums[j];
    }
  }
  min = temp;
  return min + max;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;