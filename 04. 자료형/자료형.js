// 자료형: JS처럼 타입을 언제든지 바꿀 수 있는 언어를 '동적 타입'언어라고 부른다.
let message = "hello";
message = 123456;

    // 숫자형(number): 정수 및 부동소수점 또는 Infinity, -Infinity, NaN과 같은 특수 숫자 값 포함
let n = 123;
n = 12.345;
alert(1 / 0); // Infinity 반환
alert('숫자가 아님' / 2); // NaN 반환

    // BigInt: (2^53 - 1)(9007199254740991)보다 큰 값 혹은 -(2^53 - 1) 보다 작은 정수는 '숫자형'을 사용하여 나타낼 수 없음
const bigInt = 1234567890123456789012345678901234567890n; // 끝에 'n'이 붙으면 BigInt형 자료이다.

    // 문자형: 큰 따옴표와 작은 따옴표는 차이없음
let str = "Hello"; // 큰 따옴표
let str2 = 'Single quotes are ok too'; // 작은 따옴표
let phrase = `can embed another ${str}`; // 역 따옴표: 역 따옴표로 변수나 표현식을 감싼 후 변수나 ${}안에 넣으면 포함된다.
let name1 = "John";
alert(`Hello, ${name1}!`); // 변수를 문자열 중간에 삽입
alert(`the result is ${1 + 2}`); // 표현식을 문자열 중간에 삽입

    // 불린형
let nameFieldChecked = true; // 네, name field가 확인되었습니다(checked).
let ageFieldChecked = false; // 아니오, age field를 확인하지 않았습니다(not checked)
let isGreater = 4 > 1;
alert(isGreater);

    // 'null'값
let age = null;

    // 'undefined'값
let age1;
alert(age1);
let age2 = 100;
age2 = undefined; // 명시적으로 undefined 값을 할당하는 것도 가능하다. but, 추천하지 않음. 차라리 null을 사용
