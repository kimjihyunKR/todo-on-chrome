const searchForm = document.querySelector('.js-search'),
      searchInput = searchForm.querySelector('input'),
      searchEngine = document.querySelector('#searchEngine');

const GOOGLE = 'https://www.google.com/search?q=',
      NAVER = 'https://search.naver.com/search.naver?query=',
      MEDIUM = 'https://medium.com/search?q=',
      BRANCH = 'https://brunch.co.kr/search?q=';

function handleSubmit(event) {
  event.preventDefault();
  const engine = searchEngine.value;
  const keyword = searchInput.value;
  switch(engine){
    case 'google':
      location.href = GOOGLE + keyword;
      break;
    case 'naver':
      location.href = NAVER + keyword;
      break;
    case 'medium':
      location.href = MEDIUM + keyword;
      break;
    case 'branch':
      location.href = BRANCH + keyword;
      break;
  }
}

function init(){
  searchForm.addEventListener('submit',handleSubmit);
}

init();