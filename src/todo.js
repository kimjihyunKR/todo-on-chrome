const progressBox = document.querySelector('.progressBox'),
      progressText = progressBox.querySelector('span'),
      allTodoText = progressBox.querySelector('.allTodo'),
      progress = progressBox.querySelector('#progress'),
      bar = progressBox.querySelector('#bar');

// javascript 부분 모듈화 알아보기
const toDoForm = document.querySelector('.js-toDoForm'),  //form tag
  toDoInput = toDoForm.querySelector('input'),            // input tag in form
  toDoList = document.querySelector('.js-toDoList');      // ul tag

const TODOS_LS = 'toDos'

let toDos = [];

function calDoneRate(){
  const allNum = toDos.length;
  let doneNum = 0;
  let rate;
  toDos.forEach( todo => {
    if(todo.done){
      doneNum++;
    }
  })
  rate =  doneNum / allNum * 100;
  bar.style.width = rate + '%';
  progressText.innerText = `${doneNum}`;
  allTodoText.innerHTML = `/ ${allNum}`
}

function doneTodo(event){
  const checkBox = event.target;
  const li = checkBox.parentNode;
  const toDo = toDos[li.id];
  if(event.target.checked){
    //console.log('checked')
    li.classList.add('done');
    toDo.done = true;
  } else {
    //console.log('unchecked')
    li.classList.remove('done');
    toDo.done = false;
  }
  saveToDos();    // 바뀐 done 저장
  calDoneRate()
}

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
  calDoneRate();
}

function saveToDos(){
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(toDo){
  const done = toDo.done; 
  const text = toDo.text;
  const li = document.createElement('li');
  const checkBox = document.createElement('input');
  
  const delBtn = document.createElement('button');
  const span = document.createElement('span');
  const newId = toDos.length;

  checkBox.type = 'checkbox';
  checkBox.checked = done;
  delBtn.classList.add('delBtn')
  delBtn.innerText = '×';
  delBtn.addEventListener('click', deleteToDo);
  checkBox.addEventListener('change', doneTodo)
  span.innerText = text;

  if(done){ li.classList.add('done'); }
  li.appendChild(checkBox);
  li.appendChild(span);
  li.appendChild(delBtn);
  li.id = newId;
  toDoList.appendChild(li);

  // 배열에 오브젝트로 저장
  const toDoObj = {
    text : text,
    id : newId,
    done : done,
  }

  toDos.push(toDoObj);    // toDos 배열에 추가
  saveToDos();            // local storage에 저장
  calDoneRate();
}

function handleSubmit(event){
  event.preventDefault(); //form 기본 이벤트 삭제
  const newId = toDos.length;
  const toDo = {
    text : toDoInput.value,
    id : newId,
    done : false,
  }
  paintToDo(toDo);
  toDoInput.value = '';   //input 창 비우기
}

function loadToDos(){
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if( loadedToDos !== null ){
    const paresdToDos = JSON.parse(loadedToDos);
    paresdToDos.forEach(function(toDo){
      paintToDo(toDo);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener('submit', handleSubmit)
}

init();