// 함수의 파라미ㅓㅌ, 반환 값에 타입을 정의함
function sum(a: number, b: number): number {
    return a + b;
}
// 옵셔널 파라미터 사용 ' ? ' 사용
function log(a: string, b?: string, c?: string) {

}
log('hellow world');
log('hellow world', 'abc');
log('hellow world', 'abc','33');