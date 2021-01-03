function frequencyCounter(word) {
  let frq = {};
    for (let i=0; i<word.length;i++) 
    {
        let char = word.charAt(i);
        if (frq[char] == true) 
        {
           frq[char]++;
        } 
        else 
        {
           frq[char] = 1;
        }
    }
    return frq;
}

// Do not edit this line;
module.exports = frequencyCounter;