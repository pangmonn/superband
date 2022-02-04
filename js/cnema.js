var seulong = {
    name: '김슬옹',
    birth: '1992.04.14',
    position: 'drum',
    audition: 'Follow',
    audition_link: 'https://youtu.be/aqbvVJf-4Ec',
    instargram: 'https://www.instagram.com/seulong_kim/',
    youtube: '',
    indimg: "../img/seulong.PNG",
}

var jeongho = {
    name: '변정호',
    birth: '1993.03.28',
    position: 'bass',
    audition: 'Fun',
    audition_link: 'https://youtu.be/CxM0N8eAGLE',
    instargram: 'https://www.instagram.com/byunjeongho/',
    youtube: '',
    indimg: "../img/jeongho.PNG",
}

var yoonseong = {
    name: '임윤성',
    birth: '1996.03.14',
    position: 'vocal',
    audition: "I Can't Go On Without You",
    audition_link: 'https://youtu.be/abDjSOMNT8o',
    instargram: 'https://www.instagram.com/wreck_it_ralf/',
    youtube: 'https://www.youtube.com/channel/UCAqy_iuBxIQBVN59PjaOsug',
    indimg: "../img/yoonseong.PNG",
}

var kitak = {
    name: '기탁',
    birth: '1999.01.01',
    position: 'vocal',
    audition: 'Nothing Compares 2 U',
    audition_link: 'https://youtu.be/b_l5FSHHUiY',
    instargram: 'https://www.instagram.com/shinkitak/',
    youtube: 'https://www.youtube.com/channel/UCQN0xxbXQA3dFd-s4vxh5yQ/featured',
    indimg: "../img/kitak.PNG",
}

var Cnemamem = [seulong,jeongho,yoonseong,kitak];

var teams = document.querySelectorAll('.teamname');
var positions = document.querySelectorAll('.positionname');
var CnemaMain = document.querySelector('#CnemaxMain');


var Cnema = teams[1];

var Cnemapics = ["../img/Cnema1.PNG","../img/Cnema2.PNG","../img/Cnema3.PNG","../img/Cnema4.PNG"];
var prev1 = document.querySelector('#prev1');
var next1 = document.querySelector('#next1');
var currentPic = 0;

next1.addEventListener('click',clickNext);
function clickNext() {
  if(currentPic<3) {
    currentPic+=1;
    document.querySelector(".pic").src=Cnemapics[currentPic];
  }
  if(currentPic===0){
    document.querySelector("#prev1").classList.add('noPic');
    document.querySelector("#prev1").classList.remove('yesPic');
  }  
  else if(currentPic===3){
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
    document.querySelector(".pic").src=Cnemapics[currentPic];
  }
  if(currentPic===0){
    document.querySelector("#prev1").classList.add('noPic');
    document.querySelector("#prev1").classList.remove('yesPic');
  }  
  else if(currentPic===3){
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
else if(currentPic===3){
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
for(var i=0;i<Cnemamem.length;i++) {
  member[i].addEventListener('click',function() {
    var memid = this.getAttribute("id");
    memid = +memid;
    document.querySelector('#container').style.display = 'block';
    document.querySelector('#memimg').src = Cnemamem[memid].indimg;
    document.querySelector('#detail-name').innerHTML = Cnemamem[memid].name;
    document.querySelector('#input-birth').innerHTML = Cnemamem[memid].birth;
    document.querySelector('#input-position').innerHTML = Cnemamem[memid].position;
    document.querySelector('#input-audition').innerHTML = Cnemamem[memid].audition;
    document.querySelector('#detail-clip-link').href = Cnemamem[memid].audition_link;
    document.querySelector('#detail-insta-link').href = Cnemamem[memid].instargram;
    document.querySelector('#detail-youtube-link').href = Cnemamem[memid].youtube;
  });
}

var detail_up = document.querySelector('#detail-up');
detail_up.addEventListener('click', function() {
  document.querySelector('#container').style.display = 'none';
})