// 단항 연산자와 +와 숫자형으로 변환
alert(+"2"); // 2, +는 Number 함수와 같은 역할을 함.
alert(+true); // 1
alert(+""); //0

let apples = "2";
let oranges = "3";
alert(apples + oranges); // 23
alert(+apples + +oranges); // 5


// 할당 연산자(=): 할당 연산자는 우선순위가 매우 낮음.
let a = 1;
let b = 2;
let c = 3 - (a = b + 1);

alert(a); // 3
alert(c); // 0

    // 할당 연산자 체이닝(가독성 때문에 추천하지는 않음)
let d, e, f;
d = e = f = 2 + 2; // 체이닝

alert(d); // 4
alert(e); // 4
alert(f); // 4


// 증가, 감소 연산자(변수에만 사용가능)
    // 증가 연산자(++): 변수를 1 증가시킴
let counter1 = 2;
counter1++; // counter += 1과 동일하게 작동
alert(counter1); // 3

    // 감소 연산자(--): 변수는 1 감소시킴
let counter2 = 2;
counter2--; // counter -= 1과 동일하게 작동
alert(counter2); // 1

    // 심화
        // 두 형의 차이는 반환 값을 사용할 때 차이남.
        // 전위형은 증가, 감소 후의 값을 반환
        // 후위형은 증가, 감소 전의 값을 반환
        // 반환 값을 사용하지 않는 경우라면, 차이가 없음
let counter3 = 1;
let g = ++counter3; // 전위형
alert(g); // 2

let counter4 = 1;
let h = counter4++; // 후위형
alert(h); // 1


// 과제
    // 덧셈 고치기
    // 중요도: 5
    // 아래 코드는 사용자에게 숫자 2개를 입력받은 다음 그 합을 보여줍니다.

    // 그런데 의도한 대로 예시가 동작하지 않습니다. 프롬프트 창에 세팅한 기본값을 수정하지 않은 경우 덧셈의 결과는 12가 됩니다.

    // 왜 그럴까요? 예시가 제대로 동작하도록 코드를 수정해 보세요. 결과는 3이 되어야 합니다.
        // let a = prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1);
        // let b = prompt("덧셈할 두 번째 숫자를 입력해주세요.", 2);
        // alert(a + b); // 12
        
let k = +prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 1);
let l = +prompt("덧셈할 첫 번째 숫자를 입력해주세요.", 2);
alert(k + l);