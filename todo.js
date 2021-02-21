const toDoform = document.querySelector(".js-toDoForm"),
    toDoInput = toDoform.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos =[]; // 해야할 일을 생성할 때 마다 toDos에 array로 입력

 // 함수를 실행한다. 각각의 아이템에서 실행. 
//array 안에 있는 모든 toDocs를 통한뒤 ture인 toDo만 return하여 그것들로 새로운 array 만듦


//li에 없는 id인 toDos를 체크 - 지울것

function deleteToDo(event){
   const btn = event.target;
   const li = btn.parentNode;      //parent node
   toDoList.removeChild(li);     // 삭제버튼 누른 해당 li 지우기
   const cleanToDos = toDos.filter(function(toDo){
       return toDo.id !== parseInt(li.id);
   });
   toDos = cleanToDos            //이전 것과 바꾸기
   saveToDos();
}

function saveToDos(){ //toDos local 저장
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); //string으로 바꿔주기
}

function paintToDo(text){
    const li = document.createElement("li"); //element 생성 빈 li
    const delBtn = document.createElement("button"); //button 생성
    const span = document.createElement("span"); //span 생성
    const newId = toDos.length + 1; // to do의 길이 +1 ID를 번호로 부여
    delBtn.innerText = "❌";
    delBtn.addEventListener("click", deleteToDo);   
    span.innerText = text;
    li.appendChild(delBtn);
    li.appendChild(span);  //부모 element에 넣기 생성된 li에 span과 button을 넣는다.
    li.id = newId;
    toDoList.appendChild(li); // 이것들은 toDoList에 넣는다.
    const toDoObj = {
        text: text,           
        id: newId // 입력한 텍스트와 배열의 길이 + 1(1부터 카운트)을 toDoObj에 넣는다.
    };
    toDos.push(toDoObj); // toDoObj를 선언한 배열 toDos에 넣어준다.
    saveToDos()
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}

function loadTodos(){
    const loadedToDos = localStorage.getItem(TODOS_LS);  // local Storage 불러오기
    if(loadedToDos !== null){
        const parsedToDos = JSON.parse(loadedToDos); // object 변환
        parsedToDos.forEach(function(toDo){
            paintToDo(toDo.text); // toDo의 text 하나씩 paintToDo 실행
        }) // array 각각에 한 번씩 함수를 실행, 안에서 선언할 수 있다.
    } else{

    }
}


function init(){
    loadTodos();
    toDoform.addEventListener("submit" , handleSubmit);
}

init();

// 할일 목록 저장하기 , 할일 목록을 array로
// 하나가아니라 여러개가 모일 것이므로
// local storeage는 string만 저장된다. 
// JSON JavaScriptObjectNotation 데이터를 전달할 때 자바스크립트가 그것을 다룰 수 있도록 object로 바꿔주는 기능 또는 그 반대