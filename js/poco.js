var yoona = {
    name: '제이유나',
    birth: '1996.01.27',
    position: 'vocal',
    audition: 'Bad',
    audition_link: 'https://youtu.be/h05KOc_qPq8',
    instargram: 'https://www.instagram.com/j.unanana/',
    youtube: 'https://www.youtube.com/channel/UChjDDM-lReDip-EEqjV597g',
    indimg: "../img/yoona.PNG",
}

var haeun = {
    name: '장하은',
    birth: '1996.04.06',
    position: 'guitar',
    audition: 'Bohemian Rhapsody',
    audition_link: 'https://youtu.be/pWSsArVPkqE',
    instargram: 'https://www.instagram.com/gt_hany/',
    youtube: 'https://www.youtube.com/channel/UCuVhtdZ4HCONyO_eGiRRDtg',
    indimg: "../img/haeun.PNG",
}

var minhyuk = {
    name: '정민혁',
    birth: '1998.11.24',
    position: 'guitar',
    audition: "춤을 춰요",
    audition_link: 'https://youtu.be/vQmTXlbh7iA',
    instargram: 'https://www.instagram.com/_mgmh98/?hl=ko',
    youtube: 'https://www.youtube.com/channel/UCskunq78PREUqTJkx_ytplg',
    indimg: "../img/minhyuk.PNG",
}

var jinsan = {
    name: '김진산',
    birth: '2005.06.03',
    position: 'guitar',
    audition: 'Crow',
    audition_link: 'https://youtu.be/6EV1FMcNbxw',
    instargram: 'https://www.instagram.com/j.sankim/',
    youtube: 'https://www.youtube.com/c/JinsanKim',
    indimg: "../img/jinsan.PNG",
}

var pocomem = [yoona,haeun,minhyuk,jinsan];

var teams = document.querySelectorAll('.teamname');
var positions = document.querySelectorAll('.positionname');
var pocoMain = document.querySelector('#pocoxMain');


var poco = teams[1];

var pocopics = ["../img/poco1.PNG","../img/poco2.PNG","../img/poco3.PNG","../img/poco4.PNG"];
var prev1 = document.querySelector('#prev1');
var next1 = document.querySelector('#next1');
var currentPic = 0;

next1.addEventListener('click',clickNext);
function clickNext() {
  if(currentPic<3) {
    currentPic+=1;
    document.querySelector(".pic").src=pocopics[currentPic];
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
    document.querySelector(".pic").src=pocopics[currentPic];
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
for(var i=0;i<pocomem.length;i++) {
  member[i].addEventListener('click',function() {
    var memid = this.getAttribute("id");
    memid = +memid;
    document.querySelector('#container').style.display = 'block';
    document.querySelector('#memimg').src = pocomem[memid].indimg;
    document.querySelector('#detail-name').innerHTML = pocomem[memid].name;
    document.querySelector('#input-birth').innerHTML = pocomem[memid].birth;
    document.querySelector('#input-position').innerHTML = pocomem[memid].position;
    document.querySelector('#input-audition').innerHTML = pocomem[memid].audition;
    document.querySelector('#detail-clip-link').href = pocomem[memid].audition_link;
    document.querySelector('#detail-insta-link').href = pocomem[memid].instargram;
    document.querySelector('#detail-youtube-link').href = pocomem[memid].youtube;
  });
}

var detail_up = document.querySelector('#detail-up');
detail_up.addEventListener('click', function() {
  document.querySelector('#container').style.display = 'none';
})