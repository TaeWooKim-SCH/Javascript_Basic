// 함수
    // 함수 선언
function showMessage() {
    alert('안녕하세요!');
}
showMessage();
showMessage();

    // 지역 변수: 함수 내에서 선언한 변수인 지역 변수는 함수 안에서만 접근할 수 있습니다.
function showMessage() {
    let message = "안녕하세요!"; // 지역 변수
    alert(message);
}
showMessage();

    // 외부 변수: 함수 내부에서 함수 외부의 변수인 외부 변수에 접근할 수 있습니다.
        // 외부 변수는 함수 내에 외부 변수와 같은 변수명을 가진 변수가 없는 경우에만 사용할 수 있습니다. 
let userName = "John"; // 전역 변수(global variable)라고 부름
function showMessage1() {
    let message = 'Hello, ' + userName;
    alert(message);
}
showMessage1();


    // 매개변수: 매개변수를 이용하면 임의의 데이터를 함수 안에 전달할 수 있습니다. 매개변수는 인자(parameter)라고 불리기도 합니다.
        // *Ann*: Hello, 함수가 호출될때 매개변수 자리에 들어가는 값은 인수라고 한다.
    function showMessage2(from, text) {
    from = '*' + from + '*'; // "from"을 좀 더 멋지게 꾸며줍니다.
    alert(from + ': ' + text); 
}
let from = "Ann";
showMessage2(from, "Hello"); // *Ann*: Hello


    // 기본값: 함수 호출 시 매개변수에 인수를 전달하지 않으면 그 값은 undefined가 된다.
function showMessage(from, text = "no text given") { // undefined 대신 넣을 값을 지정할 수도 있다.
    alert( from + ": " + text );
    }
showMessage("Ann"); // Ann: no text given

