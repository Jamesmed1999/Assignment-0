function fizzBuzz(start, end) {
  nums= [];
  
  for(let i = 0; start <= end; i++)
  {
    nums[i] = start;
    start++;
  }
  for(i = 0; i < nums.length;i++)
  {

    if(nums[i]% 3 == 0 && nums[i]% 5 == 0)
    {nums[i] = "FizzBuzz";}
    else if(nums[i]% 3 == 0)
    { nums[i] = "Fizz";}
    else if(nums[i] % 5 == 0)
    {nums[i] = "Buzz";}
    
  }
  return nums;
}

// Do not edit this line;
module.exports = fizzBuzz;