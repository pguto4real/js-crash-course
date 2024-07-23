function getAverage(scores) {
  // console.log(scores)
const count = scores.length;
let sum = 0;
scores.map((element)=>{
  sum+=element
  // console.log(element)
})
return sum/count
// console.log(sum)
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

function getAverage(scores) {
    let sum = 0;
  
    for (const score of scores) {
      sum += score;
    }
  
    return sum / scores.length;
  }
  function getGrade(score) {
    if(score <= 59){
      return "F"
    }
    else if(score <= 69 && score > 59){
      return "D"
    }
    else if(score <= 79 && score > 69){
      return "C"
    }
    else if(score <= 89 && score > 79){
     return  "B"
    }
    else if(score <= 99 && score > 89){
      return "A"
    }
    else{
  return "A++"
    }
  }
  
  console.log(getGrade(96));
  console.log(getGrade(82));
  console.log(getGrade(56));

  function hasPassingGrade(score) {
    if(getGrade(score) === "F")
    {
      return false
    }
    else{
      return true
    }
  }
  
  
  console.log(hasPassingGrade(100));
  console.log(hasPassingGrade(53));
  console.log(hasPassingGrade(87));

  function studentMsg(totalScores, studentScore) {
    let passed = hasPassingGrade(studentScore)? "passed": "failed";
    return `Class average: ${getAverage(totalScores)}. Your grade: ${getGrade(studentScore)}. You ${passed} the course.`
  }
  console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
  console.log(studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100));