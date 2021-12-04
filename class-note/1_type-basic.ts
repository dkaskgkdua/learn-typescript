// JS 문자열
// var str = 'hello';

// TS 문자열
let str: string = 'hello';

let num: number = 10;
let arr: Array<number> = [1,2,3];
let humans: Array<string> = ['cavan', 'angerw', 'youdz']
let items: number[] = [1,2,3];

// TS 튜플 : 배열에 각각 인덱스에 타입을 정함
let address: [string, number] = ['gangnam', 200];

// TS 객체
let obj: object = {};
let person: object = {
    name: 'mj',
    age: 28
}
let person2: { name: string, age: number } = {
    name: 'mj',
    age: 28
}

// TS 진위값
let isOk: boolean = true;