function isPalindrome(word) {
let wl = word.length
for (let i = 0; i < (wl/2); ++i) 
{
  if (word.charAt(i) != word.charAt(wl - i - 1)) 
  {
      return false;
  }
}
return true;


}

// Do not edit this line;
module.exports = isPalindrome;