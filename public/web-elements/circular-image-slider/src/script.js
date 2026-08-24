(function(){
  var images = ['https://s3-us-west-2.amazonaws.com/s.cdpn.io/21151/stockholmsquare.png','https://s3-us-west-2.amazonaws.com/s.cdpn.io/21151/bridge.png', 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/21151/cartssquare.png']
  
  var el = {
    circle: document.querySelectorAll('.circle')[0],
    circleInner: document.querySelectorAll('.circle__inner')[0],
    lastChild: document.querySelectorAll('.slice:last-child')[0]
  }
  
  function goToImg() {
    el.lastChild.addEventListener('transitionend', function transitionEnd() {
      el.lastChild.removeEventListener('transitionend', transitionEnd);
      el.circle.style.backgroundImage = el.circleInner.style.backgroundImage;
      el.circleInner.style.backgroundImage = 'none';
      el.circle.classList.remove('transition');
      
      setTimeout(function(){
        images.push(images.shift()); 
        goToImg(); 
      }, 4000);
    }, false);
    
    var newImage = new Image(); 
    newImage.onload = function() {
      el.circleInner.style.backgroundImage = 'url(' + images[0] + ')';
      el.circle.classList.add('transition');
    };
    newImage.src = images[0];
  }
  
  window.slider = {
		init: goToImg
	}
})();

window.onload = function(){
  slider.init();
}
