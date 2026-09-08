export {};

// | : 유니온
// 리터럴
const userName1 = "Bob";
let userName2 = "Tom";
// userName2 = 3;

let userName3: string | number = "Tom";
userName3 = 3;

type Job = "developer" | "designer" | "manager";
interface Person {
  name: string;
  job: Job;
}

const person1: Person = {
  name: "Alice",
  job: "developer",
};

// HighSchoolStudent - name, grade(1 or 2 or 3)
interface HighSchoolStudent {
  name: string;
  grade: 1 | 2 | 3;
}
const student1: HighSchoolStudent = {
  name: "Charlie",
  grade: 2,
};

interface Car {
  type: "car";
  color: "string";
  start(): void;
}

interface Mobile {
  type: "mobile";
  color: "string";
  call(): void;
}

const getGift = (gift: Car | Mobile) => {
  console.log(gift.color);
  if (gift.type === "car") {
    gift.start();
  } else {
    gift.call();
  }
};

// interface Developer(name, skills:문자열 배열), Manager(name, age, manage():void)
interface Developer {
  name: string;
  skills: string[];
}

interface Manager {
  name: string;
  age: number;
  manage(): void;
}

// type DevManger = 두 개의 interface 사용
type DevManger = Developer & Manager;
// const person2:DevManger = {}

const person2: DevManger = {
  name: "홍길동",
  skills: ["JavaScript", "Python"],
  age: 35,
  manage() {
    console.log("Team");
  },
};

// 제네릭
const getSize = (arr: number[] | string[]): number => {
  return arr.length;
};

const arr1 = [1, 2, 3, 4, 5];
console.log(getSize(arr1));

const arr2 = ["a", "b", "c"];
console.log(getSize(arr2));

// booleam[], Date[].....
const getGenericSize = <T>(arr: T[]): number => {
  return arr.length;
};

function getGenericSize2<T>(arr: T[]) {
  return arr.length;
}
console.log(getGenericSize2(arr1));
console.log(getGenericSize2(arr2));
const arr3 = [true, false, true];
console.log(getGenericSize2(arr3));

interface Mobile2<T> {
  name: string;
  price: number;
  option: T;
}

const myPhone: Mobile2<{ color: string; coupon: boolean }> = {
  name: "galaxy",
  price: 100000,
  option: { color: "black", coupon: true },
};

const myTablet: Mobile2<string[]> = {
  name: "galaxy",
  price: 100000,
  option: ["pen", "cover"],
};

// 함수
// 2개의 숫자를 받아서 더한 결과를 출력 함수
const sumNum = (x: number, y: number): void => console.log(x + y);
sumNum(3, 5);

//isAdult 함수 작성 age 값을 받아서 19보다 큰지 true,false 반환하는 함수
// isAdult(20);

const isAdult = (age: number): boolean => {
  return age > 19;
};

const hello = (name?: string): void => {
  console.log(`Hello, ${name || "Guest"}`);
};
hello();
hello("Sam");

const hello2 = (name: string = "Guest"): void => {
  console.log(`Hello, ${name}`);
};
hello2();
hello2("Sam");

const sum = (...nums: number[]): number => {
  return nums.length;
};
console.log(sum(1, 2, 3));
console.log(sum(1, 2, 3, 4, 5, 6, 7));

// 유틸리티
// Pick<>, Omit<>
// keyof : 객체 타입에서 key의 이름들을 타입으로 가져옴
interface User {
  id: number;
  name: string;
  age: number;
  gender: "M" | "F";
}
type Userkey = keyof User;
const uk: Userkey = "id";

// Partial<T> : T의 모든 속성을 선택적으로 만들기
type PartialUser = Partial<User>;
const pUser1: PartialUser = {};
const pUser2: PartialUser = { id: 1 };
const pUser3: PartialUser = { id: 1, name: "Alice" };

// Required<T> : T의 모든 속성을 필수로 만들기
type RequiredUser = Required<PartialUser>;
const rUser1: RequiredUser = { id: 1, name: "Bob", age: 30, gender: "M" };

// Readonly<T> : T의 모든 속성을 읽기전용으로 만들기
type ReadUser = Readonly<User>;
const reuser: ReadUser = { id: 1, name: "Bob", age: 30, gender: "M" };
// reUser.name = "";

// Exclude<T1,T2> : T1 에서 T2 제외
type T1 = string | number | boolean;
type T2 = Exclude<T1, number>;
