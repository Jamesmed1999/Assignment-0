function pairSum(nums, target) {
  let preval = {};
  if( nums.length <= 1)
  {
    throw "array has 1 or less elments"
  }
  for(let i = 0; i<nums.length; i++)
  {
    let number = nums[i];
    let needval = target - number;
    let index = preval[needval] ;
    if(index != null)
    {
      return true;
    }
    else
    {
      preval[number] = i;
    }
  }
  return false;
}

// Do not edit this line;
module.exports = pairSum;