const clockContainer = document.querySelector('.js-clock');
const clockDate = clockContainer.querySelector('span'); // 자식요소부터 찾음
const clockTime = clockContainer.querySelector('h1'); 

function getWeekString(week){
  switch (week) {
    case 0 :
      return 'Sun';
    case 1 :
      return 'Mon';
    case 2 :
      return 'Tue';
    case 3 :
      return 'Wen';
    case 4 :
      return 'Thu';
    case 5 :
      return 'Fri';
    case 6 :
        return 'Sat';
  }
}

function getTime(){
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth()+1;
  const day = date.getDate();
  const week = date.getDay();
  const weekString = getWeekString(week);
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seconds = date.getSeconds();

  clockDate.innerHTML =`${year}.${
    month < 10 ? `0${month}` : month
  }.${
    day < 10 ? `0${day}` : day
  } ${weekString}`;

  //삼항연산자
  clockTime.innerText = `${
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