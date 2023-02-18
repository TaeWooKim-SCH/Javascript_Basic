// // console에서 입력받는 방법
//     // 모듈 가져오기
// const readline = require("readline");
//     // readline 모듈을 이용해 입출력을 위한 인터페이스 객체 생성
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
//     // rl 변수
// rl.on("line", function(x) {
//         // 한 줄씩 입력받은 후 실행할 코드
//         // 입력된 값은 line에 저장된다.
//     // console.log("input: ", x);
//     let input_year = x;
//     rl.close(); // 필수!! close가 없으면 입력을 무한히 받는다.
// })
// // .on('close', function() {
// //         // 입력이 끝난 후 실행할 코드
// //     process.exit();
// //     rl.close();
// // });


// 'if'문
let year = prompt('ECMAScript-2015 명세는 몇 년도에 출판되었을까요?', '');

if (year == 2015) {
    console.log('정답입니다!');
}
input