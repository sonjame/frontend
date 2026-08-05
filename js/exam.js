// 1. 두 개의 숫자를 받아서 더한 결과를 반환하는 함수 작성 sum()
function sum(a, b) {
  return a + b;
}
console.log(sum(3, 4));

// 2. 함수 안에서 1~10까지 더한 결과를 출력하는 함수 작성
// function sumNum() {
//   let i = 1;
//   let sum = 0;
//   while (i <= 10) {
//     sum += i;
//     i++;
//   }
//   return sum;
// }
// console.log(sumNum());

function sum2() {
  let result = 0;
  for (let index = 1; index < 11; index++) {
    result += index;
  }
  console.log(result);
}
sum2();

// 3. mutiple(num) 정의 - num 이 3의 배수라면 "박수" 출력 / "통과"
function multiple(num) {
  if (num % 3 == 0) {
    console.log("박수");
  } else {
    console.log("통과");
  }
}
multiple(9);
multiple(5);

// 4. mutiple(num) - 3의 배수 "박수" / 9의 배수 "박수*2" / "통과"
function multiple2(num) {
  if (num % 3 == 0) {
    if (num % 9 == 0) {
      console.log("박수*2");
    } else {
      console.log("박수");
    }
  } else {
    console.log("통과");
  }
}
multiple2(3);
multiple2(9);
multiple2(4);

// 5. pass(outline, law) - 두과목 합해서 120점 이상이면 합격
// 단, 한 과목이라도 40점미만이면 과락으로 불합격
function pass(outline, law) {
  if (outline < 40 || law < 40) {
    return "과락으로 불합격";
  } else if (outline + law >= 120) {
    return "합격";
  } else {
    return "불합격";
  }
}
console.log(pass(39, 100));
