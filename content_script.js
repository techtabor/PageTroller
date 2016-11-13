var elems = document.body.getElementsByTagName("*");
for(var i=0;i<elems.length;i++) {
	var c = Math.random() * 2 * Math.PI;
	elems[i].style.fontFamily = 'Comic Sans MS';
	elems[i].style.color = "rgb(" +
	Math.max(0,Math.floor(255 * Math.sin(c + 0 / 3 * Math.PI))) + ","	+
	Math.max(0,Math.floor(255 * Math.sin(c + 2 / 3 * Math.PI))) + "," +
	Math.max(0,Math.floor(255 * Math.sin(c + 4 / 3 * Math.PI))) + ")";
	elems[i].style.backgroundColor = "rgb(" +
	Math.max(0,192+Math.floor(63 * Math.sin(c + 0 / 3 * Math.PI))) + ","	+
	Math.max(0,192+Math.floor(63 * Math.sin(c + 2 / 3 * Math.PI))) + "," +
	Math.max(0,192+Math.floor(63 * Math.sin(c + 4 / 3 * Math.PI))) + ")";
}

var imagelist = document.images;
for(var i=0;i<imagelist.length;i++) {
	imagelist[i].src='https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjpmoG3rKbQAhVG_iwKHdunDzcQjRwIBw&url=http%3A%2F%2Fmakeagif.com%2F2pXIsk&psig=AFQjCNEo5CKg9zwJpSy19A8CzzbPsGO7sA&ust=1479147597072013';
	imagelist[i].srcset="";
}

startfloat();

//Image floater script by Bamrtn

function startfloat(){
  var density = 0.000005;
  var floaters = [
    'https://media.giphy.com/media/sIfLhexLUqwik/giphy.gif',
	'http://i.imgur.com/jALYM.gif',
  ];


  function randDeg(){
    return Math.floor(Math.random() * 359);
  }
  function randPer(){
    return Math.floor(Math.random() * 100);
  }
  function randMDur(){
    return Math.floor(Math.random() * 5)+5;
  }
  function randPDur(){
    return Math.floor(Math.random() * 3)+2;
  }

  function genfloaterKeyframes(n){
    var d1 = randDeg();
    var d2 = randDeg();
    var d3 = randDeg();
    var a='@keyframes floater'+n+' {\n'+
    '0% {transform: rotateY( '+d1+'deg ) rotateX( '+d2+'deg ); filter: hue-rotate( '+d3+'deg );}\n'+
    '25% {transform: rotateY( '+randDeg()+'deg ) rotateX( '+randDeg()+'deg ); filter: hue-rotate( '+randDeg()+'deg );}\n'+
    '50% {transform: rotateY( '+randDeg()+'deg ) rotateX( '+randDeg()+'deg ); filter: hue-rotate( '+randDeg()+'deg );}\n'+
    '75% {transform: rotateY( '+randDeg()+'deg ) rotateX( '+randDeg()+'deg ); filter: hue-rotate( '+randDeg()+'deg );}\n'+
    '100% {transform: rotateY( '+d1+'deg ) rotateX( '+d2+'deg ); filter: hue-rotate( '+d3+'deg );}\n'+
    '}\n';
    return a;
  }

  function genMoveKeyframes(n){
    var p1 = randPer();
    var p2 = randPer();
    var a='@keyframes move'+n+' {\n'+
    '0% {top: '+p1+'vh; left: '+p2+'vw;}\n'+
    '15% {top: '+randPer()+'vh; left: '+randPer()+'vw;}\n'+
    '30% {top: '+randPer()+'vh; left: '+randPer()+'vw;}\n'+
    '45% {top: '+randPer()+'vh; left: '+randPer()+'vw;}\n'+
    '60% {top: '+randPer()+'vh; left: '+randPer()+'vw;}\n'+
    '75% {top: '+randPer()+'vh; left: '+randPer()+'vw;}\n'+
    '90% {top: '+randPer()+'vh; left: '+randPer()+'vw;}\n'+
    '100% {top: '+p1+'vh; left: '+p2+'vw;}\n'+
    '}\n';
    return a;
  }

  function genCss(n){
    var floaterCss = document.createElement('style');
    floaterCss.type = 'text/css';
    var a = "";
    for (var i=0; i<n; i++) a+=genfloaterKeyframes(i)+genMoveKeyframes(i);
    floaterCss.innerHTML = a;
    document.getElementsByTagName('head')[0].appendChild(floaterCss);
  }

  var mainContainer;

  function genfloater(n){
    for (var i=0; i<n; i++){
      var newCont = document.createElement("div");
      newCont.style.position = 'absolute';
      newCont.style.animationName = 'move'+i;
      newCont.style.animationDuration = randMDur()+'s';
      newCont.style.animationIterationCount = 'infinite';
      newCont.style.animationTimingFunction = 'ease';
	  newCont.style.height = '100px';
      newCont.style.perspective = '300px';
      var newImg = document.createElement("img");
      newImg.src = floaters[Math.floor(Math.random() * floaters.length)];
	  newImg.style.height = '100px';
	  newImg.style.position = 'relative';
	  newImg.style.top = '-50%';
	  newImg.style.left = '-50%';
      newImg.style.transformStyle = 'preserve-3d';
      newImg.style.animationName = 'floater'+i;
      newImg.style.animationDuration = randPDur()+'s';
      newImg.style.animationIterationCount = 'infinite';
      newImg.style.animationTimingFunction = 'ease';
      newCont.appendChild(newImg);
      mainContainer.appendChild(newCont);
    }
  }

  mainContainer = document.createElement("div");
  mainContainer.style.pointerEvents = 'none';
  mainContainer.style.touchAction = 'none';
  mainContainer.style.position = 'fixed';
  mainContainer.style.zIndex = '100000';
  mainContainer.style.width = '100vw';
  mainContainer.style.height = '100vh';
  mainContainer.style.top = '0px';
  mainContainer.style.left = '0px';
  mainContainer.style.overflow = 'hidden';
  var num = Math.floor(window.innerWidth*window.innerHeight*density);
  genCss(num);
  genfloater(num);
  document.body.appendChild(mainContainer);
}
