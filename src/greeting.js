const form = document.querySelector('.js-form'); 
const input = document.querySelector('input');
const greeting = document.querySelector('.js-greeting');

const USER_LS = 'currentUser';
const SHOWING_CN = 'showing';

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(event){
  event.preventDefault();               // form의 reload되는 기본 이벤트 반응을 지워버림
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener('submit',handleSubmit);
}

function paintGreeting(text){
  form.classList.remove(SHOWING_CN);    // form 안보이게 
  greeting.classList.add(SHOWING_CN);   // greeing이 보이게
  greeting.innerText = `Hello ${text}`;
}

function loadName(){
  const currentUser = localStorage.getItem(USER_LS);
  if( currentUser === null ) {
    askForName();
  } else {
    //she is
    paintGreeting(currentUser);
  }
}


function init (){
  loadName();
}

init();