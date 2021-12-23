// function logMessage(value: string) {
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100);

// 유니온 타입(하나 이상의 타입 설정)
// 라이브 코딩 시 타입추론이 가능
function logMessage(value: string | number) {
    if(typeof value === 'number') {
        value.toLocaleString();
    }
    if(typeof value === 'string') {
        value.toString();
    }
    throw new TypeError('value must be string or number');

}
logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}
interface Person {
    name: string;
    age: number;
}
// 유니온 타입의 경우 인터페이스가 오면 중복되는 부분만 인정된다.
function askSomeone1(someone: Developer | Person) {
    // someone.name;
    // someone.skill;
    // someone.age;
}
askSomeone1({name: '디벨로퍼', skill: '웹 개발'})
askSomeone1({name: '송민준', age: 100})

// 인터섹션 타입 (&) 두개의 인터페이스 속성을 모두 만족해야 하는 타입
function askSomeone2(someone: Developer & Person) {
    // someone.name;
    // someone.skill;
    // someone.age;
}
askSomeone2({ name: '디벨로퍼', skill: '웹 개발', age: 34})