// 'if'문
let year_1 = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', "");
if (year_1 == 2015) {
    alert("정답입니다!");
    alert("아주 똑똑하시네요!");
}


// 'else'절
let year_2 = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', "");
if (year_2 == 2015) {
    alert("정답입니다!");
}
else {
    alert('오답입니다!');
}


// 'else if'로 복수 조건 처리하기
let year_3 = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', "");
if (year_3 < 2015) {
    alert("숫자를 좀 더 올려보세요.");
}
else if (year_3 > 2015) {
    alert("숫자를 좀 더 내려보세요.");
}
else {
    alert('정답입니다!');
}


// 조건부 연산자 '?'
let accessAllowed;
let age = prompt('나이를 입력해주세요.', '');
if (age > 18) {
    accessAllowed = true;
}
else {
    accessAllowed = false;
}
alert(accessAllowed);

    // let result = condition ? value1 : value2;
let access_Allowed = (age > 18) ? '참입니다' : '거짓입니다';
alert(access_Allowed);


// 다중 '?'
let age_1 = prompt('나이를 입력해주세요', 18);
let message = (age_1 < 3) ? '아기야 안녕?': 
    (age_1 < 18) ? '안녕!' :
    (age_1 < 100) ? '환영합니다!' : 3
    "나이가 아주 많으시거나, 나이가 아닌 값을 입력하였습니다.";
alert(message);

