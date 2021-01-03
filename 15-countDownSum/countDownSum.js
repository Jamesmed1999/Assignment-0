class MySolution {
  countDownSum(num) {
    let a = 0;
    while(num <=0)
    {
    a += num;
    
    this.countDownSum(num-1);
    }
    return a;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;