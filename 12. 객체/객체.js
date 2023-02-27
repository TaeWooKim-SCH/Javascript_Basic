// 객체 생성 방법
let user1 = new Object(); // '객체 생성자' 문법
let user2 = {}; // '객체 리터럴' 문법

// 리터럴과 프로퍼티
    // 중괄호 {...} 안에는 '키: 값' 쌍으로 구성된 프로퍼티가 들어갑니다.
let user = {
    name: "John",
    age: 30
};

    // 객체 user에는 프로퍼티가 두 개 있습니다.
        // 1. 첫 번째 프로퍼티 - "name(key)"과 "John(value)" 한 쌍
        // 2. 두 번째 프로퍼티 - "age(key)"와 30(value) 한 쌍

    // 서랍장에 파일을 추가하고 뺄 수 있듯이 개발자는 프로퍼티를 추가, 삭제할 수 있습니다.
    // 점 표기법(dot notation)을 이용하면 프로퍼티 값을 읽는 것도 가능합니다.
alert(user.name); // John
alert(user.age); // 30

    // 프로퍼티 값엔 모든 자료형이 올 수 있습니다. 불린형 프로퍼티를 추가해봅시다.
user.isAdmin = true; // {name = "John", age: 30, isAdimin: true}

    // delete 연산자를 사용하면 프로퍼티를 삭제할 수 있습니다.
delete user.age; // {name = "John", isAdimin: true}

    // 여러 단어를 조합해 프로퍼티 이름을 만든 경우엔 프로퍼티 이름을 따옴표로 묶어줘야 합니다.
let user3 = {
    name: "John",
    age: 30,
    "likes birds": true // 복수의 단어는 따옴표로 묶어야 합니다.
};

    // const로 선언된 객체는 수정될 수 있습니다.
const user = {
    name: "John"
};
user.name = "Pete";
alert(user.name); // Pete


// 대괄호 표기법
    // 여러 단어를 조합해 프로퍼티 키를 만든 경우엔, 점 표기법을 사용해 프로퍼티 값을 읽을 수 없습니다.
let user4
user4["likes birds"] = true; // 값 설정
alert(user4["likes birds"]); // 값 얻기
delete user4["likes birds"]; // 삭제


// 계산된 프로퍼티
let fruit = prompt("어떤 과일을 구매하시겠습니다?", "apple");
let bag = {
    [fruit]: 5, // 변수 fruit에서 프로퍼티 이름을 동적으로 받아 옵니다.
};
alert(bag.apple); // fruit에 "apple"이 할당되었다면, 5가 출력됩니다.
// 위 예시에서 [fruit]는 프로퍼티 이름을 변수 fruit에서 가져오겠다는 것을 의미합니다.

let fruit1 = prompt("어떤 과일을 구매하시겠습니까?", "apple");
let = beg = {};
bag[fruit] = 5; // 변수 fruit을 사용해 프로퍼티 이름을 만들었습니다.
    // 대괄호 표기법은 프로퍼티 이름과 값의 제약을 없애주기 때문에 점 표기법보다 훨씬 강력합니다. 
    // 그런데 작성하기 번거롭다는 단점이 있습니다.


// 단축 프로퍼티
function makeUser(name, age) {
    return {
        name: name,
        age: age,
        // ...등등
    };
}
let user = makeUser("John", 30);
alert(user.name); // John
    // 위 예시의 프로퍼티들은 이름과 값이 변수의 이름과 동일하네요. 
    // 이렇게 변수를 사용해 프로퍼티를 만드는 경우는 아주 흔한데, 
    // 프로퍼티 값 단축 구문(property value shorthand) 을 사용하면 코드를 짧게 줄일 수 있습니다.
function makeUser(name, age) {
    return {
        name, // name: name과 동일 
        age, // age: age와 동일
    };
}
    // 한 객체에서 일반 프로퍼티와 단축 프로퍼티를 함께 사용하는 것도 가능합니다.
let user = {
    name1, // name1: name1과 같음
    age: 30
};


// 'in' 연산자로 프로퍼티 존재 여부 확인하기
    // 자바스크립트 객체의 중요한 특징 중 하나는 다른 언어와는 달리, 
    // 존재하지 않는 프로퍼티에 접근하려 해도 에러가 발생하지 않고 undefined를 반환한다는 것입니다.
let user = {};
alert(user.noSuchProperty === undefined); // true는 '프로퍼티가 존재하지 않음'을 의미합니다.
    // 이렇게 undefined와 비교하는 것 이외에도 연산자 in을 사용하면 프로퍼티 존재 여부를 확인할 수 있습니다.
    // "key" in object
let user = {name: "John", age: 30};
alert("age" in user); // user.age가 존재하므로 true가 출력됩니다.
alert("blabla" in user); // user.blabla는 존재하지 않기 때문에 false가 출력됩니다.


// 객체 정렬 방식
    // 객체는 '특별한 방식으로 정렬’됩니다. 
    // 정수 프로퍼티(integer property)는 자동으로 정렬되고, 그 외의 프로퍼티는 객체에 추가한 순서 그대로 정렬됩니다.
    // 자세한 내용은 예제를 통해 살펴봅시다.
let codes = {
    "49": "독일",
    "41": "스위스",
    "44": "영국",
    "1": "미국"
};
for (let code in codes) {
    alert(code); // 1, 41, 44, 49
}
