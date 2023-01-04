// 변수
    // 변수 선언 방법1
let message;
message = 'Hello'; // 문자열을 저장
alert(message);

    // 변수 선언 방법2: 변수를 정의함과 동시에 값 할당
let message1 = 'Hello'; // 같은 이름의 변수는 한 번만 선언할 수 있음
alert(message1);

    // 변수 선언 방법3: 여러 변수를 한 줄에 선언
let user = 'John', age = 25, message2 = 'Hello';
var name1 = 'kate'; // var과 let 의 차이는 거의 없음

    // JS의 변수 명명 규칙
        // JS에서 변수명에는 오직 문자와 숫자, 기호는 $와 _만 들어갈 수 있음
        // 첫 글자는 숫자가 될 수 없음
        // 예약어 목록에 있는 단어는 변수명으로 사용할 수 없음(let, return 등등)
let $ = 1;
let _ = 2;
alert($ + _);



// 상수: 변하지 않는 수. 따라서 변경하면 에러 발생
const myBirthday = '18.04.1982'; // const로 선언

