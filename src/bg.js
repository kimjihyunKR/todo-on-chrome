const body = document.querySelector('body');
const IMG_NUMBER = 3;

function handleImgLoad(){
  console.log('finished loading');
}

function paintImage(imgNumber){
  const div = document.createElement("div");
  
  div.classList.add('bgImg');
  const urlString = `url("img/${imgNumber}.jpg")`;
  div.style.backgroundImage = urlString;
  body.appendChild(div);
  //console.log(imgNumber, div.style.backgroundImage);
  //api 일때 필요한 코드
  //img.addEventListener('loadend', handleImgLoad);
}

function genRandom(){
  // return 0 1 2
  const number = Math.floor(Math.random() * 3) ;
  return number + 1;
}

function init(){
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();