const form = document.querySelector('.js-form'); 
const input = document.querySelector('#userName');
const greeting = document.querySelector('.js-greeting');

const USER_LS = 'currentUser';
const SHOWING_CN = 'showing';

function editUserName(){
  localStorage.removeItem(USER_LS);         // 저장된 이름을 지우고
  greeting.classList.remove(SHOWING_CN);    // 인사 문구를 안보이게
  askForName();                             //
}

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
  const editButton = document.createElement('button');
  editButton.innerText = '✍🏻';
  editButton.addEventListener('click',editUserName);

  form.classList.remove(SHOWING_CN);    // form 안보이게 
  greeting.classList.add(SHOWING_CN);   // greeing이 보이게
  greeting.innerText = `Hello ${text} `;
  greeting.appendChild(editButton);
}

function loadName(){
  const currentUser = localStorage.getItem(USER_LS);
  if( currentUser === null ) {
    askForName();
  } else {
    paintGreeting(currentUser);
  }
}


function init (){
  loadName();
}

init();