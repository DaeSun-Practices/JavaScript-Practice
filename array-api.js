// Q1. make a string out of an array
console.log("Q1. make a string out of an array")

{
  const fruits = ['apple', 'banana', 'orange'];

  let answer = "";
  for (let fruit of fruits){
    answer += fruit;
  }
  console.log(answer);

  const result = fruits.join(',');
  console.log(result);
}

// Q2. make an array out of a string
console.log("Q2. make an array out of a string")
{
  const fruits = '🍎, 🥝, 🍌, 🍒';
  const result = fruits.split(',');
  console.log(result);
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
console.log("Q3. make this array look like this: [5, 4, 3, 2, 1]")
{
  const array = [1, 2, 3, 4, 5];
  const result = array.reverse();
  console.log(result);
  console.log(array);   // 원본도 바꿔버린다.
}

// Q4. make new array without the first two elements
console.log("Q4. make new array without the first two elements")
{
  const array = [1, 2, 3, 4, 5];
  const result = array.slice(2, 5);
  console.log(result);
  console.log(array);   //원본은 그대로
}

class Student {
  constructor(name, age, enrolled, score) {
    this.name = name;
    this.age = age;
    this.enrolled = enrolled;
    this.score = score;
  }
}
const students = [
  new Student('A', 29, true, 45),
  new Student('B', 28, false, 80),
  new Student('C', 30, true, 90),
  new Student('D', 40, false, 66),
  new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
console.log("Q5. find a student with the score 90")
{ //find는 input으로 callback함수를 받는다.   array의 element, index
  const result = students.find(function (student, index) {
    return student.score == 90; // return 값이 true인 element를 result에 넣어준다.
  });
  console.log(result);
}

{
  const result = students.find((student) => student.score === 90);
  console.log(result);
}

// Q6. make an array of enrolled students
console.log("Q6. make an array of enrolled students")
{
  const result = students.filter(function(student){
    return student.enrolled == true;
  });
  console.log(result);
}

{
  const result = students.filter((student) => student.enrolled);
  console.log(result);
}

// Q7. make an array containing only the students' scores
console.log("Q7. make an array containing only the students' scores")
// result should be: [45, 80, 90, 66, 88]
// mapping을 한다는 것인데, 이는 array의 값을 변형하여 새로운 값을 만들어낸다는 의미이다.
{
  const result = students.map(function (student){
    return student.score * 2;
  });
  console.log(result);
}
{
  const result = students.map((student) => student.score * 2);
  console.log(result);
}

// Q8. check if there is a student with the score lower than 50
console.log("Q8. check if there is a student with the score lower than 50")
{
  // some 누군가 하나라도 있는가?
  const result = students.some((student) => student.score < 50);
  console.log(result);

  // evey : 모든 요소들이 이 조건을 만족하는가?
  const result2 = !students.every((student) => student.score >= 50);
  console.log(result2);
}

// Q9. compute students' average score
// 평균을 구함
// reduce: 누적해서 값을 받는 것이다.
// reduceright : 뒤에서부터 받는다.
console.log("Q9. compute students' average score")
{
  const result = students.reduce((prev, curr) => prev.score + curr.score);
  console.log(result / students.length);
}

// Q10. make a string containing all the scores
console.log("Q10. make a string containing all the scores")
// result should be: '45, 80, 90, 66, 88'
{
  const result = students.map((student) => student.score).join(", ");
  console.log(result)
}
{
  const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
  console.log(result);
}

// Bonus! do Q10 sorted in ascending order
console.log("Bonus! do Q10 sorted in ascending order")
// result should be: '45, 66, 80, 88, 90'
{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => a - b)
    .join();
  console.log(result);
}

{
  const result = students
    .map((student) => student.score)
    .sort((a, b) => b - a)
    .join();
  console.log(result);
}
