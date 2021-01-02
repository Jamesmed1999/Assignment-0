function cutInHalfAndFloor(num) {
  if(num%2 == 0)
  {
    return num/2;
  }
  else
  {
    num = num/2;
    return num-.5;
  }
}

// Do not edit this line;
module.exports = cutInHalfAndFloor;