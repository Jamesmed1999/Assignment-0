function setUnionOfAnyAmountOfSets(...args) {
  let union = new Set();
  for (let value of args) 
  {
    union.add(value);
  }
  
  return union;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;