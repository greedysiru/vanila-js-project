const form = document.querySelector(".js-form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings")

const USER_LS = "currentUser",
    SHOWING_CN = "showing"

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function hadleSubmit(evnet){
    event.preventDefault(); // 도큐먼트를 보내는 동작을 막는다.
    const currentValue = input.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}
//default에 의해 submit을 하면 그 데이터를 어딘가로 보내려하기때문에 새로고침을 한다.
//이 이벤트를 없앤다
//이벤트 발생하면 루트에서 일어나고 폼에서 일어난다. 폼을 제출하는 에빈트가 바랭하면 도큐먼트까지 새로고침 

function askForName(){
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", hadleSubmit)           //뭔가를 submit하면 이것을 처리
}
//currentUser가 없으면 user 명을 요청

function paintGreeting(text){
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}


function loadName(){
    const currentUser = localStorage.getItem(USER_LS)
    if(currentUser == null){
        askForName();                       //user 명 요청
    }else {
        paintGreeting(currentUser);
    }
}



function init(){
    loadName();
}

init();

// 쿼리 셀렉터는 원하는 셀렉터는 다 가져온다  찾은 첫번째 것을 가져옴
// 쿼리셀렉터 올 모든 것을 가져옴 클래스 명에 다른 엘리먼트들을 가져오는데 array로 만듦
// getbyID tagname, 태그로 앨리먼트를 가져옴 input, body, html, div section등
// 로컬스토리지 작은 정보를 나의 유저 컴퓨터에 저장하는 방법 자바스크리트 정보들을 작은
// localStorage.setItem("greedysiru", true); 
// localStorage.getItem("greedysiru"); 새로고침해도 저장되어ㅣ있다.
// 로컬스토리지에서 밸류 변경도 가능
// 없으면 null 출력 존재하지 않음

