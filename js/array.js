// 배열 (== 파이썬 리스트)
// 배열의 값으로는 제한이 없다
let arr1 = [];
let arr2 = ["a", "b", 1, 2, 1.5, true];
console.log(arr1, arr1.length);
console.log(arr2, arr2.length);
console.log(arr2[1]);

// 배열 함수
// 1.push() : 뒤에 추가
arr1.push(25);
arr1.push(35);
arr1.push(45);
console.log(arr1, arr1.length);

// 2. unshift() : 앞에 추가
arr1.unshift("복숭아");
console.log(arr1, arr1.length);

arr1[1] = "사과";
console.log(arr1, arr1.length);

// 3. pop() : 마지막 요소 제거
arr1.pop();
console.log(arr1, arr1.length);
// 4. shift() : 맨 앞 요소 제거
arr1.shift();
console.log(arr1, arr1.length);

// join("연결문자열")
console.log(arr2.join("-"));
// 6. concat() : 다른 배열과 합치기
console.log(arr2.concat(arr1));
// 7. slice(시작, 끝) : 끝 위치 포함안함
console.log(arr2.slice(1, 3));
console.log(arr2.sort());
// 8. indexOf(찾고자하는요소) : 요소가 있으면 index 번호 반환 / 없으면 -1
console.log("c위치 찾기 ", arr2.indexOf("c"));

// 복사(얕은복사, 깊은복사)
console.log("=== 앝은복사, 깊은복사 ====");
let arr3 = arr2;
console.log("arr2", arr2);
console.log("arr3", arr3);

arr3[1] = 33;
console.log("arr2", arr2);
console.log("arr3", arr3);

console.log("=== 깊은복사(값 복사) ====");
// ... : spread
arr3 = [...arr2];
arr3[2] = 42;
console.log("arr2", arr2);
console.log("arr3", arr3);

let varArr1 = ["num1", "num2"];
let varArr2 = ["num3", "num4"];

let sumLetArr = [...varArr1, ...varArr2];
console.log(sumLetArr);

const fruits = new Array("사과", "망고", "바나나", "수박");
fruits.forEach((item, idx) => console.log(idx, item));
