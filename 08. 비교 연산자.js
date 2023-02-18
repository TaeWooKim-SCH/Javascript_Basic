// 불린형 반환
console.log(2 > 1); // true
console.log(2 == 1); // false
console.log(2 != 1); // true

let result = 5 > 4; // 비교 결과를 변수에 할당
console.log(result); // true


// 문자열 비교: 정확히는 유니코드 순서. 대소문자에선 소문자가 더 크다.
console.log('Z' > 'A'); // true
console.log('Glow' > 'Glee'); // true
console.log('Bee' > 'Be'); // true


// 다른 형을 가진 값 간의 비교: 비교하려는 값의 자료형이 다르면 JS는 숫자형으로 바꾸고 비교함.
console.log('2' > 1); // true
console.log('01' == 1); // true

console.log(true == 1); // true, 불린값의 경우 true는 1, false는 0으로 변환된 후 비교가 이뤄집니다.
console.log(false == 0); // true

    // 흥미로운 상황
let a = 0;
console.log(Boolean(a)); // false
let b = "0";
console.log(Boolean(b)); // true
console.log(a == b); // true!!


// 일치 연산자
    // == 연산자는 형 변환이 된 결과 값으로 비교함. === 연산자는 형 변환하기 전에 값으로 비교함.
    // 일치 연산자 ===가 동등 연산자 ==의 엄격한 버전인 것처럼 ‘불일치’ 연산자 !==는 부등 연산자 !=의 엄격한 버전입니다.
console.log(0 == false); // true
console.log('' == false); // true
console.log(0 === false); // false


// null이나 undefined와 비교하기
    // 일치 연산자 ===를 사용하여 null과 undefined를 비교
console.log(null === undefined); // false

    // 동등 연산자 ==를 사용하여 null과 undefined를 비교
console.log(null == undefined); // true

    // 산술 연산자나 기타 비교 연산자 <, >, <=, >=를 사용하여 null과 undefined를 비교
        // null과 undefined는 숫자형으로 변환됩니다. null은 0, undefined는 NaN으로 변합니다.


// null vs 0    
    // 동등 연산자 ==는 피연산자가 undefined나 null일 때 형 변환을 하지 않습니다. 
    // undefined와 null을 비교하는 경우에만 true를 반환하고, 그 이외의 경우(null이나 undefined를 다른 값과 비교할 때)는 무조건 false를 반환합니다. 
    // 이런 이유 때문에 (2)는 거짓을 반환합니다.
console.log(null > 0); // false (1)
console.log(null == 0); // false!! (2)
console.log(null >= 0); // true (3)


// 비교 불가능한 undefined: undefined를 다른 값과 비교해서는 안 됩니다.
    // (1)과(2)에선 undefined가 NaN으로 변환되는데(숫자형으로의 변환), NaN이 피연산자인 경우 비교 연산자는 항상 false를 반환합니다.
    // undefined는 null이나 undefined와 같고, 그 이외의 값과는 같지 않기 때문에 (3)은 false를 반환합니다.
console.log(undefined > 0); // false (1)
console.log(undefined < 0); // false (2)
console.log(undefined == 0); // fasle (3)
