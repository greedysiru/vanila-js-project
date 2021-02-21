/*
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
 const currentClass = title.className;
 if(currentClass !== CLICKED_CLASS){
     title.className = CLICKED_CLASS;
 } else {
     title.className = "";
 }
}

function init() {
    title.addEventListener("click", handleClick);
}
init();

//이전 클래스가 없어지는 문제점
*/
/*
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
 const hasClass = title.classList.contains(CLICKED_CLASS);
 if(!hasClass){
     title.classList.add(CLICKED_CLASS);
 } else {
     title.classList.remove(CLICKED_CLASS) = "";
 }
}

function init() {
    title.addEventListener("click", handleClick);
}
init();
*/
const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
    title.addEventListener("click", handleClick);
}
init();

.bgImage {
    position : absolute;
    top:0;
    left:0;
    width:100%;
    height: 100%;
    z-index: 1;
}