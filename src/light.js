const lightBtn = document.querySelector('.js-light');
//const body = document.querySelector('body'); // declared at ./bg

const DARK_COLOR = '#252935',
      LIGHT_COLOR = '#fff',
      DONE_COLOR = 'rgba(0, 0, 0, 0.2)'
      DARK_DONE_COLOR = 'rgba(255, 255, 255, 0.4)';

function handleLight(event){
  const isDark = lightBtn.classList.toggle('dark');
  //console.log(isDark);

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