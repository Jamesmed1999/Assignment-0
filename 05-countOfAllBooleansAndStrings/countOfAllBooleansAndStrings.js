function countOfAllBooleansAndStrings(arr) {
  let count=0;
  for(let i = 0; i< arr.length;i++)
  {
    if(arr[i] === true || arr[i] === false)
    {
      count ++;
    }
    else if(typeof arr[i] == "string")
    {
      count++;
    }

  }
  
  return count;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;