const clockContainer = document.querySelector('.js-clock');
const clockTitlle = clockContainer.querySelector('h1'); // 자식요소부터 찾아서 가능

function getTime(){
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();
  //삼항연산자
  clockTitlle.innerText = `${
    hours < 10 ? `0${hours}` : hours
  }:${
    minutes < 10 ? `0${minutes}` : minutes
  }:${
    seconds < 10 ? `0${seconds}` : seconds
  }`;
}


function init(){
  getTime();
  setInterval(getTime, 1000);
}

init();