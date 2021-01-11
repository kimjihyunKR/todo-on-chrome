const lightBtn = document.querySelector('.js-light');
const body = document.querySelector('body');

const DARK_COLOR = '#252935',
      LIGHT_COLOR = '#fff',
      DONE_COLOR = '#c0c0c0'
      DARK_DONE_COLOR = '#6b6b6b';

function handleLight(event){
  const isDark = lightBtn.classList.toggle('dark');
  console.log(isDark);

  if(isDark){
    body.style.setProperty('--bgColor', DARK_COLOR);
    body.style.setProperty('--defaultFontColor', LIGHT_COLOR);
    body.style.setProperty('--pointColor', LIGHT_COLOR);
    body.style.setProperty('--done', DARK_DONE_COLOR);
  } else {
    body.style.setProperty('--bgColor', LIGHT_COLOR);
    body.style.setProperty('--defaultFontColor', DARK_COLOR);
    body.style.setProperty('--pointColor', DARK_COLOR);
    body.style.setProperty('--pointColor', DARK_COLOR);
    body.style.setProperty('--done', DONE_COLOR);
  }
  
}

function init(){
  lightBtn.addEventListener('click', handleLight)
}

init();