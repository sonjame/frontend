// 타입지정
// string, number, boolean, array, null, undefined
const car: string = "BMW";
let car2: string = "BMW";

// 선언된 타입과 다른 타입 대입시 오류
// car2 = 3;
let age: number = 23;
let isAdult: boolean = false;
let n: null = null;
let u: undefined = undefined;

let fruits: string[] = ["사과", "바나나", "딸기"];
// fruits.push(95);
let score1: number[] = [95, 78, 100];
let mixed: (string | number)[] = ["사과", "바나나", 78, "딸기"];

// 타입 추론
let fruits2 = ["사과", "바나나", "딸기"];

const vegetables: ReadonlyArray<string> = ["carrot", "broccoli", "spinach"];
const vegetables2: readonly string[] = ["carrot", "broccoli", "spinach"];
const scores2: readonly number[] = [100, 95, 85];
// vegetables.push("potato")
// scores2.push()

// ...
const newArray = [...scores2, 85];
console.log(newArray);

// 타입스크립트에서 추가된 데이터 타입
// 튜플 : 배열인데 요소의 개수와 각 위치의 타입을 미리 정해 놓은 배열
const person: [string, number] = ["Alice", 25];
console.log(person[0].toLowerCase());

person[0] = "Tiger";
person[1] = 26;
console.log(person);

function getUserInfo(): [string, number, boolean] {
  return ["Bob", 30, true];
}
// console.log(getUserInfo());
const [username, age1, isUserAdult] = getUserInfo();

// 추론을 이용한 튜플 선언
// 상수처럼
const person2 = ["Alice", 25] as const;
// person2[0] = "three";

// 배열선언
const array1: number[] = [];
// 튜플선언
const tuple1: [number, string] = [25, ""];

// any : js 랑 같은 개념(거의 자주 사용하지 않음)
// any : 타입 검사 포기
let num;
num = 95;
num = "Nine";

let randomValue: any = 10;
randomValue = "hello";
console.log(randomValue.length);
randomValue = true;

// unknown : 무슨 타입인지 모르니까 사용불가
// 확인 후 사용
let unknownValue: unknown = 10;
unknownValue = "Hello";
console.log(unknownValue);

// let strLength:number = unknownValue.length
if (typeof unknownValue === "string") {
  let strLength: number = unknownValue.length;
  console.log(strLength);
}

// void : 반환값이 없는 함수
function message(msg: string): void {
  // return msg;
  console.log(msg);
}

const print1 = (): void => {
  console.log(print1);
};

// printLength() : 반환값 없음
// 파라메터 text => string or null
function printLength(text: string | null): void {
  if (text === null) {
    console.log("No text");
    return;
  }
  console.log(`${text.length}`);
}

const numbers = [1, 2, 3, 4, 5];
numbers.forEach((num): void => {
  console.log(num);
});

// never : 에러를 반환하거나 절대 종료되지 않는 함수의 타입으로 사용
// x 파라메터 : string,number,boolean
function handleValue(x: string | number | boolean | object): void {
  if (typeof x === "string") {
  } else if (typeof x === "number") {
  } else if (typeof x === "boolean") {
  } else if (typeof x === "object") {
  } else {
    const unreachable: never = x;
    throw new Error("Unhandled type : " + unreachable);
  }
}
handleValue("Hello");
handleValue(42);
handleValue(true);
handleValue({ name: "John" });

// 열거형 : 관련있는 상수들을 하나의 이름으로 묶어놓은 타입
enum Color {
  Red = 1,
  Green,
  Blue,
}
console.log("enum");

console.log(Color.Green); // 1
let favoriteColor: Color = Color.Green;
