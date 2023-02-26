// let func = (arg1, arg2, ...argN) => expression
let sum = (a, b) => a + b;
alert(sun(1, 2)); // 3

let double = n => n * 2;
alert(double(3)); // 6

// 인수가 하나도 없을 땐 괄호를 비워놓으면 된다. 다만 괄호는 생략할 수 없다.
let sayHi = () => alert("안녕하세요!");
sayHi();

let age = prompt("나이를 알려주세요.", 18);
let welcome = (age < 18) ?
    () => alert('안녕') :
    () => alert('안녕하세요!');
welcome();

let sum1 = (a, b) => { // 중괄호는 본문 여러 줄로 구성되어 있음을 알려준다.
    let result = a + b;
    return result;
}
alert(sum(1, 2)); // 3
