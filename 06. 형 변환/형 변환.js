// 문자형으로 변환
let value = true;
alert(typeof value);

value = String(value); // 변수 value엔 문자열 "true"가 저장됨.
alert(typeof(value));


// 숫자형으로 변환
alert("6" / "2"); // 3, 문자열이 숫자형으로 자동변환된 후 연산이 수행됨.

let age = Number("임의의 문자열 123");
alert(age); // NaN, 형 변환 실패

let a = undefined;
alert(Number(a)); // NaN, undefined 값은 숫자형으로 변환하면 NaN이 됨.

let b = null;
alert(Number(b)); // 0, null 값은 숫자형으로 변환하면 0이 됨.


// 불린형으로 변환
    // 0, 빈 문자열, null, undefined, NaN과 같이 직관적으로 "비어있다고"느껴지는 값들은 false가 됨.
    // 그 외에 값은 모두 true
alert(Boolean(4)); // true
alert(Boolean(undefined)); // false
alert(Boolean("")); // false, 빈 문자열
alert(Boolean(';')); // true
alert(Boolean("0")); // ture, 숫자 0이 아니라 문자열임.
