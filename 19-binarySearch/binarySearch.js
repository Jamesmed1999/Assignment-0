class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    let lower = 0;
    let upper = nums.length-1;

    while(lower <= upper)
    {
      let middle = lower + Math.floor((upper-lower)/2)


      if(target === nums[middle])
      {
        return true;
      }
      else if (target < nums[middle])
      {
        upper = middle -1;
      }
      else if(target > nums[middle])
      {
        lower = middle+1;
      }
    }
    return false;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;