// javascript 부분 모듈화 알아보기
const toDoForm = document.querySelector('.js-toDoForm'),  //form tag
  toDoInput = toDoForm.querySelector('input'),            // input tag in form
  toDoList = document.querySelector('.js-toDoList');      // ul tag

const TODOS_LS = 'toDos'

let toDos = [];


function deleteToDo(event){
  const btn = event.target;
  const li = btn.parentNode;
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo){
     // console.log(toDo.id, li.id); // Number vs String
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos(){
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){ 
  const li = document.createElement('li');
  const delBtn = document.createElement('button');
  const span = document.createElement('span');
  const newId = toDos.length + 1 ;

  delBtn.innerText = '❌';
  delBtn.addEventListener('click', deleteToDo);
  span.innerText = text;

  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);

  // 배열에 오브젝트로 저장
  const toDoObj = {
    text : text,
    id : newId
  }

  toDos.push(toDoObj);    // toDos 배열에 추가
  saveToDos();            // local storage에 저장
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = '';
}

function loadToDos(){
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if( loadedToDos !== null ){
    const paresdToDos = JSON.parse(loadedToDos);
    paresdToDos.forEach(function(toDo){
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener('submit', handleSubmit)
}

init();