var linzzy = {
    name: '린지',
    birth: '1995.11.14',
    position: 'vocal',
    audition: 'You Oughta Know',
    audition_link: 'https://youtu.be/qK6y7Jpcrkw',
    instargram: 'https://www.instagram.com/leenzylife/',
    youtube: 'https://www.youtube.com/channel/UCM8oUlI-oG9qFNeumYuDilg?view_as=subscriber',
    indimg: "../img/linzzy.PNG",
}

var hyunzo = {
    name: '황현조',
    birth: '1995.09.25',
    position: 'producer',
    audition: '꼬리',
    audition_link: 'https://youtu.be/H1l0AMWebAI',
    instargram: 'https://www.instagram.com/_zzzzzo_/',
    youtube: '',
    indimg: "../img/hyunzo.PNG",
}

var akyung = {
    name: '은아경',
    birth: '1999.07.23',
    position: 'drum',
    audition: 'Tierrasanta',
    audition_link: 'https://youtu.be/G47i8qm_AS4',
    instargram: 'https://www.instagram.com/eunahkyung/',
    youtube: 'https://www.youtube.com/channel/UCBqjyK4aI6ECE5Mbjd_rsow',
    indimg: "../img/akyung.PNG",
}

var nayoung = {
    name: '정나영',
    birth: '2001.12.10',
    position: 'guitar',
    audition: 'Beat Yourself Blind',
    audition_link: 'https://youtu.be/9_gxJvSaia4',
    instargram: 'https://www.instagram.com/jayna_blues/',
    youtube: 'https://www.youtube.com/channel/UCrmFNgQWrlgjc9aIdjnsYyA',
    indimg: "../img/nayoung.PNG",
}

var TheFixmem = [linzzy,hyunzo,akyung,nayoung];

var teams = document.querySelectorAll('.teamname');
var positions = document.querySelectorAll('.positionname');
var TheFixMain = document.querySelector('#TheFixMain');


//The Whales
var TheFix = teams[1];

var TheFixpics = ["../img/thefix1.PNG","../img/thefix2.PNG","../img/thefix3.PNG","../img/thefix4.PNG"];
var prev1 = document.querySelector('#prev1');
var next1 = document.querySelector('#next1');
var currentPic = 0;

next1.addEventListener('click',clickNext);
function clickNext() {
  if(currentPic<3) {
    currentPic+=1;
    document.querySelector(".pic").src=TheFixpics[currentPic];
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
    document.querySelector(".pic").src=TheFixpics[currentPic];
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
for(var i=0;i<TheFixmem.length;i++) {
  member[i].addEventListener('click',function() {
    var memid = this.getAttribute("id");
    memid = +memid;
    document.querySelector('#container').style.display = 'block';
    document.querySelector('#memimg').src = TheFixmem[memid].indimg;
    document.querySelector('#detail-name').innerHTML = TheFixmem[memid].name;
    document.querySelector('#input-birth').innerHTML = TheFixmem[memid].birth;
    document.querySelector('#input-position').innerHTML = TheFixmem[memid].position;
    document.querySelector('#input-audition').innerHTML = TheFixmem[memid].audition;
    document.querySelector('#detail-clip-link').href = TheFixmem[memid].audition_link;
    document.querySelector('#detail-insta-link').href = TheFixmem[memid].instargram;
    document.querySelector('#detail-youtube-link').href = TheFixmem[memid].youtube;
  });
}

var detail_up = document.querySelector('#detail-up');
detail_up.addEventListener('click', function() {
  document.querySelector('#container').style.display = 'none';
})