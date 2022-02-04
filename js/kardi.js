var hwanglin = {
    name: '황린',
    birth: '1996.12.02',
    position: 'guitar',
    audition: 'KiPURHEDLOW',
    audition_link: 'https://youtu.be/r3FuvInDxnI',
    instargram: 'https://www.instagram.com/lnnyhwng/',
    youtube: 'https://www.youtube.com/c/LeeneyHwang',
    indimg: "../img/hwanglin.PNG",
  }
  
  var yeji = {
    name: '김예지',
    birth: '1996.09.23',
    position: 'vocal',
    audition: 'River',
    audition_link: 'https://youtu.be/gmbPEcCuA7k',
    instargram: 'https://www.instagram.com/y__easy/',
    youtube: 'https://www.youtube.com/channel/UCSvSlQhBdV7vJh3byBJT2Tg',
    indimg: '../img/yeji.PNG',
  }
  
  var dawool = {
    name: '박다울',
    birth: '1992.10.04',
    position: 'lyre',
    audition: '거문장난감',
    audition_link: 'https://youtu.be/Bu7ILmiCDuc',
    instargram: 'https://www.instagram.com/wool_music/',
    youtube: 'https://www.youtube.com/channel/UC1-TOnCeGjZV5XzcI6nNxBQ',
    indimg: '../img/dawool.PNG',
  }
  
  var sungbae= {
    name: '전성배',
    birth: '1997.11.13',
    position: 'drum',
    audition: 'Flashing Lights',
    audition_link: '',
    instargram: 'https://www.instagram.com/taketheholygrail/',
    youtube: 'https://www.youtube.com/channel/UCdUJQAytrQA_ZjREXSo-KMA',
    indimg: '../img/sungbae.PNG',
  }
  
  var inkyu = {
    name: '황인규',
    birth: '1993.03.02',
    position: 'bass',
    audition: "나홀로 마음껏 그대를 사랑하는 밤",
    audition_link: 'https://youtu.be/R5sxRnXA1AM',
    instargram: 'https://www.instagram.com/hwanginkyu__/',
    youtube: '',
    indimg: '../img/inkyu.PNG',
  }
  var kardimem = [hwanglin,yeji,dawool,sungbae,inkyu];
  
  var teams = document.querySelectorAll('.teamname');
  var positions = document.querySelectorAll('.positionname');
  var kardiMain = document.querySelector('#kardiMain');
  
  
  var kardi = teams[0];
  
  var kardipics = ["../img/kardi.PNG","../img/kardi2.PNG","../img/kardi3.PNG","../img/kardi4.PNG"];
  var prev1 = document.querySelector('#prev1');
  var next1 = document.querySelector('#next1');
  var currentPic = 0;
  
  next1.addEventListener('click',clickNext);
  function clickNext() {
    if(currentPic<3) {
      currentPic+=1;
      document.querySelector(".pic").src=kardipics[currentPic];
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
      document.querySelector(".pic").src=kardipics[currentPic];
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
  for(var i=0;i<kardimem.length;i++) {
    member[i].addEventListener('click',function() {
      var memid = this.getAttribute("id");
      memid = +memid;
      document.querySelector('#container').style.display = 'block';
      document.querySelector('#memimg').src = kardimem[memid].indimg;
      document.querySelector('#detail-name').innerHTML = kardimem[memid].name;
      document.querySelector('#input-birth').innerHTML = kardimem[memid].birth;
      document.querySelector('#input-position').innerHTML = kardimem[memid].position;
      document.querySelector('#input-audition').innerHTML = kardimem[memid].audition;
      document.querySelector('#detail-clip-link').href = kardimem[memid].audition_link;
      document.querySelector('#detail-insta-link').href = kardimem[memid].instargram;
      document.querySelector('#detail-youtube-link').href = kardimem[memid].youtube;
    });
  }
  
  var detail_up = document.querySelector('#detail-up');
  detail_up.addEventListener('click', function() {
    document.querySelector('#container').style.display = 'none';
  })