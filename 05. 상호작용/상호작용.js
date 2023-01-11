// alert, prompt, confirm을 이용한 상호작용
    // alert
alert('Hello');

    // prompt: 입력받을 때 쓰는 함수
        // result = prompt(title, [default]);
            // title: 사용자에게 보여줄 문자열
            // default: 입력 필드의 초깃값(선택값)
let age = prompt('나이를 입력해주세요.', 100); // 사용자가 입력을 취소한 경우엔 null이 반환됨.
alert(`당신의 나이는 ${age}살 입니다.`); 
let test = prompt("Test", ''); // 모든 익스플로어에서 정상 작동하기 위해 웬만해선 두 번째 매개변수 입력 권장함.

    // confirm: 매개변수로 받은 질문과 확인 및 취소 버튼이 있는 모달 창을 보여주는 함수이다.
        // 사용자가 확인 버튼을 누르면 true, 그 외에 경우는 false를 반환한다.
        // result = confirm(question);
let isBoss = confirm("당신이 주인인가요?");
alert( isBoss );


// 과제: 사용자에게 이름을 물어보고, 입력받은 이름을 그대로 출력해주는 페이지를 만들어 보세요.
let name1 = prompt("당신의 이름은 무엇입니까?", '');
alert(name1);