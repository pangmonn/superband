var kihoon = {
  name: '조기훈',
  birth: '1996.03.23',
  position: 'drum',
  audition: 'Godzilla',
  audition_link: 'https://youtu.be/-gRnk_5ElMU',
  instargram: 'https://www.instagram.com/groove__j/',
  youtube: 'https://www.youtube.com/channel/UCcEjM9Fc8yR49dA0QjAna3w/featured',
  indimg: "../img/kihoon.PNG",
}

var sukhoon = {
  name: '정석훈',
  birth: '1997.07.09',
  position: 'guitar',
  audition: 'Positions',
  audition_link: 'https://youtu.be/KlfjJW9OXZ8',
  instargram: 'https://www.instagram.com/_sk0on/',
  youtube: 'https://youtube.com/channel/UC9C-ldxQkU5YvWy3G7AQO2w',
  indimg: '../img/sukhoon.PNG',
}

var semin = {
  name: '양장세민',
  birth: '1999.11.23',
  position: 'bass',
  audition: 'Disco Yes',
  audition_link: 'https://youtu.be/Bu7ILmiCDuc',
  instargram: 'https://www.instagram.com/yangjang_p/',
  youtube: 'https://www.youtube.com/channel/UCV3aUCFTS3lKFWMJXUzuJsg/featured',
  indimg: '../img/semin.PNG',
}

var joonseo = {
  name: '김준서',
  birth: '2001.05.08',
  position: 'piano',
  audition: 'Falling Slowly',
  audition_link: 'https://youtu.be/Yt90bKqL5Eg',
  instargram: 'https://instagram.com/joonseojoon/',
  youtube: 'https://youtube.com/channel/UCZAgCrEF1d6drmpiVSh_Qfg',
  indimg: '../img/joonseo.PNG',
}

var hangyum = {
  name: '김한겸',
  birth: '2003.09.30',
  position: 'vocal',
  audition: "Don't Look Back In Anger",
  audition_link: 'https://youtu.be/QKPF3OE61w4',
  instargram: 'https://www.instagram.com/i_d__f_a_han/',
  youtube: 'https://www.youtube.com/channel/UCNMAtqedBapsDfmf2-RMDVA',
  indimg: '../img/hangyum.PNG',
}
var TheWhalesmem = [kihoon,sukhoon,semin,joonseo,hangyum];

var teams = document.querySelectorAll('.teamname');
var positions = document.querySelectorAll('.positionname');
var TheWhalesMain = document.querySelector('#TheWhalesMain');


//The Whales
var TheWhales = teams[0];

var TheWhalespics = ["../img/thewhales.jpg","../img/thewhales2.jpg","../img/thewhales3.jpg","../img/thewhales4.jpg","../img/thewhales5.png","../img/thewhales6.png"];
var prev1 = document.querySelector('#prev1');
var next1 = document.querySelector('#next1');
var currentPic = 0;

next1.addEventListener('click',clickNext);
function clickNext() {
  if(currentPic<5) {
    currentPic+=1;
    document.querySelector(".pic").src=TheWhalespics[currentPic];
  }
  if(currentPic===0){
    document.querySelector("#prev1").classList.add('noPic');
    document.querySelector("#prev1").classList.remove('yesPic');
  }  
  else if(currentPic===5){
    document.querySelector("#next1").classList.remove('yesPic');
    document.querySelector("#next1").classList.add('noPic');
  }
  else {
    document.querySelector("#prev1").classList.remove('noPic');
    document.querySelector("#prev1").classList.add('yesPic');
    document.querySelector("#next1").classList.remove('noPic');
    document.querySelector("#next1").classList.add('yesPic');
  }
}

prev1.addEventListener('click',clickPrev);
function clickPrev() {
  if(currentPic>0) {
    currentPic-=1;
    document.querySelector(".pic").src=TheWhalespics[currentPic];
  }
  if(currentPic===0){
    document.querySelector("#prev1").classList.add('noPic');
    document.querySelector("#prev1").classList.remove('yesPic');
  }  
  else if(currentPic===5){
    document.querySelector("#next1").classList.remove('yesPic');
    document.querySelector("#next1").classList.add('noPic');
  }
  else {
    document.querySelector("#prev1").classList.remove('noPic');
    document.querySelector("#prev1").classList.add('yesPic');
    document.querySelector("#next1").classList.remove('noPic');
    document.querySelector("#next1").classList.add('yesPic');
  }
}

if(currentPic===0){
    document.querySelector("#prev1").classList.add('noPic');
    document.querySelector("#prev1").classList.remove('yesPic');
}  
else if(currentPic===5){
    document.querySelector("#next1").classList.remove('yesPic');
    document.querySelector("#next1").classList.add('noPic');
}
else {
    document.querySelector("#prev1").classList.remove('noPic');
    document.querySelector("#prev1").classList.add('yesPic');
    document.querySelector("#next1").classList.remove('noPic');
    document.querySelector("#next1").classList.add('yesPic');
}

var member = document.querySelectorAll('.mempic');
for(var i=0;i<TheWhalesmem.length;i++) {
  member[i].addEventListener('click',function() {
    var memid = this.getAttribute("id");
    memid = +memid;
    document.querySelector('#container').style.display = 'block';
    document.querySelector('#memimg').src = TheWhalesmem[memid].indimg;
    document.querySelector('#detail-name').innerHTML = TheWhalesmem[memid].name;
    document.querySelector('#input-birth').innerHTML = TheWhalesmem[memid].birth;
    document.querySelector('#input-position').innerHTML = TheWhalesmem[memid].position;
    document.querySelector('#input-audition').innerHTML = TheWhalesmem[memid].audition;
    document.querySelector('#detail-clip-link').href = TheWhalesmem[memid].audition_link;
    document.querySelector('#detail-insta-link').href = TheWhalesmem[memid].instargram;
    document.querySelector('#detail-youtube-link').href = TheWhalesmem[memid].youtube;
  });
}

var detail_up = document.querySelector('#detail-up');
detail_up.addEventListener('click', function() {
  document.querySelector('#container').style.display = 'none';
})

//menu1 클릭 시
/*
for(var val of teams) {
  val.addEventListener('click',function(event) {
  main.style.display = 'none';
  menu1.style.display = 'flex'; //나중에 사용하는 display로 바꾸기!
  menu2.style.display = 'none';
  });
}
*/

//menu2 클릭 시
for(var val of positions) {
  val.addEventListener('click',function(event) {
  main.style.display = 'none';
  menu1.style.display = 'none';
  menu2.style.display = 'flex'; //나중에 사용하는 display로 바꾸기!
  TheWhalesMain.style.display = 'none';
  });
}